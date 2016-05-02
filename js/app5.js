
  //var miTodo={"_terapeuta":"0000","rut":"111111","datosPersonales":{"nombres":"Juanito","apat":"Alguien","amat":"Algo"},"genero":"Masculino"};
  //var rutTerapeuta="125851940";

  var puedeBorrar=true;
  var soloTerapeuta=true;

  'use strict';

  var ENTER_KEY = 13;

  //var db = new PouchDB('http://tdc.iriscouch.com:5984/fichamtchtest');
  //var dbreset=db.destroy().then(function () {console.log("db borrada")}).catch(function(error){console.log(error);});

  //var remoteCouch = 'http://terapeutageneral:fichamtch0220@tdc.iriscouch.com:5984/fichasegura';
  //mientras decido que hacer con la autenticación

var db;
//var remoteCouch='http://tdc.iriscouch.com:5984/fichasegura';
//var remoteCouch='http://tdc.iriscouch.com';
//var remoteServer='http://tdc.iriscouch.com:5984/';

//var remoteCouch='https://fichamtch.smileupps.com/fichasegura';
//var remoteServer='https://fichamtch.smileupps.com/';
//var remoteCouch='http://127.0.0.1:5984/fichasegura';
//var remoteServer='http://127.0.0.1:5984/';

var remoteCouch='https://couchdb-a35b38.smileupps.com/fichasegura';
var remoteServer='https://couchdb-a35b38.smileupps.com/';

var remoteDb;
var nomDB;
var intervaloLogin;
var reintentoLogin=10000; //Cada cuánto busca conectarse a la bd remota para validar el login
var offline=false;

function creaDB(usuario){ //crea la bd y la conexión sengún el usuario

  return new Promise(function(resolve,reject){

    var hash = sha3_256(usuario);
    nomDB='ficha_'+hash; //esta es la base local.

    //alert(nomDB);
    midb = new PouchDB(nomDB);
    remoteDb = remoteServer+nomDB;
    //remoteDb = remoteServer+"fichasegura";
    console.log("remoteDB:"+remoteDb);

  //verificamos si la base existe.
    midb.info().then(function(result){
      console.log(result.doc_count);
      if (result.doc_count<1){
        console.log("menos de 1 registro");
        var result=confirm("No se encontraron fichas locales para este usuario:"+usuario+". \n¿Desea crear una nueva base?\n(IMPORTANTE: El usuario debe existir en el servidor para la sincronización)")
        if (result){
          midb.changes({
            since: 'now',
            live: true
          }).on('change', showTodos, midb);

          resolve(midb);

        }else {
          midb.destroy().then(function () { //se borra la base creada para consultar.
              // success
            }).catch(function (error) {
              console.log(error);
            });
            reject(Error("Creacion cancelada"));
        }
      }else{
        console.log("mas de 0 registro");
        resolve(midb);
        //return true;
      }
    }).catch(function(err){
      console.log(err);
      reject(Error(err));
    })
  });

}

function conectaDB(miDB){

/* Falla con el cambio
  var opts = {
      live: true,
      retry:true,
      filter: function (doc) {
          return doc.terapeuta === usuario; //sincronizamos sólo las fichas de este terapeuta
        }
      };
*/
    var opts={
      live:true,
      retry:true
    };

 console.log("conectaDB.miDB:"+miDB+":"+remoteDb);
  miDB.sync(remoteDb, opts).on('change', function (change) {
      // yo, something changed!
        syncProcess(change);
        console.log("syncProcess:"+change);
        showTodos(miDB);

      }).on('paused', function (info) {
      // replication was paused, usually because of a lost connection
        syncCompleted(info);
        console.log("synCompleted:"+info);

      }).on('active', function (info) {
      // replication was resumed
        syncProcess(info);
        console.log("syncProcess:"+info);

      }).on('error', function (err) {
      // totally unhandled error (shouldn't happen)
        syncError(err);
        console.log("syncProcess:"+err);

      });
}

function refrescarCopiaLocal(){
  var result = confirm("¡ATENCION!\nSe borrará la copia local y se perderá todo lo no sincronizado.");
  if (result) {
    var dbreset=db.destroy().then(function () {
      console.log("db borrada");
      iniciaSesion();
    }
    ).catch(function(error){
      console.log(error);});
  }

}

 function addFicha(fichaJson){
   var miFicha=fichaJson;

   if(typeof miFicha._id==undefined || miFicha._id==undefined){ //no me queda claro porque dejo de funcionar.
     var miId=miFicha.terapeuta+"_"+sha3_256(miFicha.rut);
     miFicha["_id"]=miId;
   } else {
     console.log("ficha existente:"+miFicha["_id"]);
   }

   //console.log(JSON.stringify(miFicha, null, "  "));

   db.put(miFicha, function callback(err, result) {
     if (!err) {
       console.log('Exitosamente grabado en '+nomDB+' !');
       //Consultamos los registros grabados
       showTodos(db);
       alert("Grabado exitosamente.");
       esperar(false,"");
       //luego de grabarlo obtenemos el documento y lo presentamos para tener el _rev.
       db.get(miFicha["_id"]).then(function(doc){
         showButtonPressed(doc);
       }).catch(function (err) {
          console.log(err);
          alert("Hubo un problema al cargar la ficha. Itentelo nuevamente.")
          esperar(false,"");
        });
     }else{
       console.log('Error al escribir en '+nomDB+' ! '+err+":"+result);
       if (err.name=="conflict"){
         alert("Error al grabar, posiblemente ya existe la ficha.");
       }else {
         alert("Error al grabar");
       }

       esperar(false,"");
     }
   });
 }

  // Show the current list of todos by reading them from the database
  function showTodos(midb) {

    esperar(true,"");

    var opts = {
      include_docs: true,
      descending: true,
      attachments: true
        };

    console.log("showTodos:"+midb);
    midb.allDocs(opts, function(err, doc) {
      redrawTodosUI(doc.rows);
    });//*/
    esperar(false,"");
  }

  function checkboxChanged(todo, event) {
    //todo.completed = event.target.checked;
    //db.put(todo);
    miTodo=todo;
    console.log(miTodo);
  }

  // User pressed the delete button for a todo, delete it
  function deleteButtonPressed(todo) {
    var result = confirm("Desea borrar a: "+todo.datosPersonales.nombres+" "+todo.datosPersonales.apat);
    if (result) {
      db.remove(todo);
      showTodos(db);
    }

  }

  function showButtonPressed(todo) {
    //miTodo=todo; //convierte el Json en una variable global, no es bonito

    //$("#inputIDBd").val(todo.datosPersonales.apat+" "+todo.datosPersonales.amat+", "+todo.datosPersonales.nombres)
    miAlpaca(todo); //despliega la ficha
    $('#listadoPacientes').collapse("hide");
  }

  // The input box when editing a todo has blurred, we should save
  // the new title or delete the todo if the title is empty
  function todoBlurred(todo, event) {
    var trimmedText = event.target.value.trim();
    if (!trimmedText) {
      db.remove(todo);
    } else {
      todo.title = trimmedText;
      db.put(todo);
    }
  }


  var syncDom = document.getElementById('sync-wrapper');
  // There was some form or error syncing
  function syncError(err) {
    syncDom.setAttribute('data-sync-state', 'error');
    if(err.name=="not_found"){
      alert("No se encontró la base en el servidor");
    }
    console.log("syncError:"+err);
  }
  function syncCompleted(result) {
    syncDom.setAttribute('data-sync-state', 'success');
    console.log("syncCompleted:"+result);
  }
  function syncProcess(result) {
    syncDom.setAttribute('data-sync-state', 'process');
    console.log("syncProcess:"+result);
  }

  // User has double clicked a todo, display an input so they can edit the title
  function todoDblClicked(todo) {
    var div = document.getElementById('li_' + todo._id);
    var inputEditTodo = document.getElementById('input_' + todo._id);
    div.className = 'editing';
    inputEditTodo.focus();
  }

  // If they press enter while editing an entry, blur it to trigger save
  // (or delete)
  function todoKeyPressed(todo, event) {
    if (event.keyCode === ENTER_KEY) {
      var inputEditTodo = document.getElementById('input_' + todo._id);
      inputEditTodo.blur();
    }
  }


  function createTodoListItem(todo) {
    //console.log(todo);

    var clabel=document.createElement("td");
    var label = document.createElement('label');
    label.appendChild( document.createTextNode(todo._id+" : "+todo.datosPersonales.apat+" "+todo.datosPersonales.amat+", "+todo.datosPersonales.nombres));
    label.addEventListener('dblclick', todoDblClicked.bind(this, todo));
    //clabel.appendChild(label);

    capat=document.createElement("td");
    capat.appendChild(document.createTextNode(todo.datosPersonales.apat));

    camat=document.createElement("td");
    camat.appendChild(document.createTextNode(todo.datosPersonales.amat));

    cnombres=document.createElement("td");
    cnombres.appendChild(document.createTextNode(todo.datosPersonales.nombres));


    var caccion=document.createElement("td");
    var deleteLink = document.createElement('button');
    deleteLink.className = "glyphicon glyphicon-trash";
    deleteLink.addEventListener( 'click', deleteButtonPressed.bind(this, todo));
    var tborrar=document.createTextNode("");
    deleteLink.appendChild(tborrar);
    caccion.appendChild(deleteLink);

    //var cshow=document.createElement("td");
    var showLink = document.createElement('button');
    showLink.className = 'glyphicon glyphicon-list-alt';
    showLink.addEventListener( 'click', showButtonPressed.bind(this, todo));
    var t = document.createTextNode("");
    showLink.appendChild(t);
    caccion.appendChild(showLink);

    var divDisplay = document.createElement('div');
    divDisplay.className = 'view';
    //divDisplay.appendChild(checkbox);
    divDisplay.appendChild(label);

  //  if (puedeBorrar){  divDisplay.appendChild(deleteLink);}

    //divDisplay.appendChild(showLink);
    clabel.appendChild(divDisplay);

    var fila=document.createElement("tr");
    fila.className="filaListado";
    fila.appendChild(capat);
    fila.appendChild(camat);
    fila.appendChild(cnombres);
    fila.appendChild(caccion);

    if (todo.completed) {
      li.className += 'complete';
      checkbox.checked = true;
    }

    return fila;
  }


  function redrawTodosUI(todos) {

    console.log("Redibujando los pacientes");

    var tb = document.getElementById('todo-list');
    tb.setAttribute("data-toggle","table");
    tb.className="table table-striped table-bordered table-condensed";
    tb.setAttribute("data-pagination","true");

    var thead=document.createElement("thead");
    var tr=document.createElement("tr");

    var th1=document.createElement("th");
    th1.setAttribute("data-field","apat");
    th1.appendChild(document.createTextNode("Apat"));

    var th2=document.createElement("th");
    th2.setAttribute("data-field","amat");
    th2.appendChild(document.createTextNode("Amat"));

    var th3=document.createElement("th");
    th3.setAttribute("data-field","nombres");
    th3.appendChild(document.createTextNode("Nombres"));

    var th4=document.createElement("th");
    th4.setAttribute("data-field","acciones");
    th4.appendChild(document.createTextNode("Acciones"));

    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);

    thead.appendChild(tr);

    tb.appendChild(thead);

    tb.innerHTML = ''; //limpia la tabla
    todos.forEach(function(todo) {
      //ul.appendChild(createTodoListItem(todo.doc));
      tb.appendChild(createTodoListItem(todo.doc))
    });
  }

//Sistema de autenticación directa contra Couchdb

//Script de login

$( '#submitLogin' ).click(function( event ) {

  var usuario=$('#usuario').val();
  var clave=$('#clave').val();

  console.log(usuario+":"+clave);

  rutTerapeuta=usuario;
  esperar(true,"");
  offline=false;
  couchLogin(usuario,clave);

});

function couchLogin(usuario, clave){

console.log("couchLogin:"+usuario+"-"+clave);

  ldb.login(usuario,clave, function (err, response) {
    if (err) {
      if (err.name === 'unauthorized') {
        // name or password incorrect
        alert("El usuario o clave son incorrectos.");
        $("#login-modal").modal("show");
        $('#ficha').hide();
        esperar(false,"");

      } else if (err.name=="illegal_database_name") {
        // cosmic rays, a meteor, etc.
        alert("Base de datos remota no reconocida");

      } else {
        console.log("en offline 387");
        if (!offline){
          var result=confirm("Problemas para conectar con el servidor.\n ¿Desea trabajar fuera de línea?");
          if (result){
            if (typeof intervaloLogin !=undefined){
              clearInterval(intervaloLogin);
              console.log("Intervalo Borrado");
              offline=true;
            }
            intervaloLogin=setInterval(couchLogin,reintentoLogin,usuario,clave); //intenta reconectar cada cierto tiempo.
            console.log("Trabajando off-line.");
            rutTerapeuta=usuario;
            creaDB(usuario).then(function(result){
              conectaDB(result);
              db=result;
              showTodos(result);
              $("#login-modal").modal("hide");
              $('#ficha').show();

            }).catch(function(err){
              alert("error en la promesa");
              esperar(false,"");
            });
        }else{
          offline=false;
          esperar(false,"");
        }

        }
      }
    }else {
      console.log("en el else 415");
      if(response.ok){
        $("#login-modal").modal("hide");
        if (typeof intervaloLogin !=undefined){
          clearInterval(intervaloLogin);
          console.log("Intervalo Borrado");
        }
        offline=false;
        iniciaSesion();
      }
    }
    console.log("login:"+JSON.stringify(response));
  });
}

function iniciaSesion(){
//verifica si puede iniciar una sesion
  ldb.getSession(function (err, response) {
      if (err) {
        // network error
        //Si hay un error de conexión abre el login para trabajar fuera de línea
        $("#login-modal").modal("show");
        $('#logout').hide();

      } else if (!response.userCtx.name) { //si se conecta, pero no hay usuario, muestra la pantalla de login
        // nobody's logged in
        $("#login-modal").modal("show");
        $('#logout').hide();

      } else{ // Si se conecta y hay usuario se registra como tal y habilita el logout
        // response.userCtx.name is the current user
        $('#logout').show();
        $('#logout').text("Logout: "+response.userCtx.name);
        $('#loginLink').hide();
        //asignamos el usuario
        rutTerapeuta=response.userCtx.name;
        creaDB(rutTerapeuta).then(function(result){
          conectaDB(result);
          showTodos(result);
          db=result;
          //Mostramos la ficha
          $('#ficha').show();
        }).catch(function(err){
          alert("Hubo un problema:"+err);
        });

        //revisamos si es administrador para mostrar el link de administración
        if (response.userCtx.roles.indexOf("_admin")>(-1)){
          $('#usersAdmin').show();
        }else{
          $('#usersAdmin').hide();
        }
      }
      console.log("getSession:"+JSON.stringify(response));
    });
}


  $( '#logout' ).click(function( event ) { //habilita el logout
    //console.log( 'clicked', $( this ).text() );
    ldb.logout(function (err, response) {
        if (err) {
          // network error
          alert("No se pudo desconectar");
        }else{
          $('#loginLink').show();
          $('#logout').hide();
          $('#ficha').hide();
        }
        console.log("logout:"+JSON.stringify(response));
      });
  });

  function crearUsuario(usuario,clave,correo,rol,labase){ //función para crear usuarios en la base remota

    ldb.signup(usuario,clave, {
      metadata : {
        email : correo,
        base : labase,
        roles : [rol]
      }
    }, function (err, response) {
      // etc.
      console.log("crearUsuario:"+JSON.stringify(response)+"-err:"+err);
    });
  };

  $('#submitNuevo').click(function(event){ //envía un nuevo usuario a la base remota.

    var usuario=$('#nusuario').val();
    var password=$('#nclave').val();
    var password2=$('#nclave2').val();
    var correo=$('#ncorreo').val();
    var rol=$('#nrol').val();

    if (password !="undefined" && password.length>6 && password==password2){
      crearUsuario(usuario,password,correo,rol,"fichasegura");
      //alert("Se creara");
      $('#admin-modal').modal("hide");
    }else{
      alert("Las contraseñas no coinciden")
    }

  });

  $('#cancelarNuevo').click(function(event) { //Cancela la creación de un usuario
    $('#admin-modal').modal("hide");
  });

  if (typeof rutTerapeuta == 'undefined'){ //si viene un rut y una clave no debiera requerir iniciar sesión, no lo tengo claro.
    console.log("No se encontró rutTerapeuta");
    var rutTerapeuta;

    if (remoteCouch){
      var ldb = new PouchDB(remoteCouch);
      console.log("ldb:"+JSON.stringify(ldb))
    }

    iniciaSesion();
    //rutTerapeuta="111111";
    //alert("No hay un usuario identificado, usando base de prueba:"+rutTerapeuta);
  }else { //Si viene con el rut no debiera existir login, pero no lo tengo claro.
    $('#login').hide();
    $('#ficha').show();
  }

function esperar(estado,mensaje){
  if (estado){
    $('#espera-modal').modal('show');
  }else {
    $('#espera-modal').modal('hide');
  }

}
  /*
  Hay que pensar que hacemos con los usuarios cuando no haya conexión, podemos usarlos con la clave en forma temporal y
  tratar de reconectar cada cierto tiempo.
  Si lo dejaremos autenticado contra el couchdb habra que cambiar el string de conexión. Actualmente usa un terapeuta genérico.

  Si se usa una base por usuario para luego sincronizarla sería prudente construir el id también con los datos del terapeuta.

  */
//Cierre autenticación directa
