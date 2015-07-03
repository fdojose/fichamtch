
  //var miTodo={"_terapeuta":"0000","rut":"111111","datosPersonales":{"nombres":"Juanito","apat":"Alguien","amat":"Algo"},"genero":"Masculino"};
  //var rutTerapeuta="125851940";
  if (typeof rutTerapeuta == 'undefined'){
    rutTerapeuta="111111";
    alert("No hay un usuario identificado, usando base de prueba:"+rutTerapeuta);

  }
  var puedeBorrar=true;
  var soloTerapeuta=true;

  'use strict';

  var ENTER_KEY = 13;
  var syncDom = document.getElementById('sync-wrapper');

  // EDITING STARTS HERE (you dont need to edit anything above this line)

  var nomDB='fichamtchtest';
  var db = new PouchDB(nomDB);
  //var db = new PouchDB('http://tdc.iriscouch.com:5984/fichamtchtest');
  //var dbreset=db.destroy().then(function () {console.log("db borrada")}).catch(function(error){console.log(error);});

  // Replace with remote instance, this just replicates to another local instance.
  var remoteCouch = 'http://tdc.iriscouch.com:5984/fichamtchtest';

  var intervaloSync = setInterval(function () {sync()}, 60000); //tratamos de sincronizar cada 60 segundos
  db.changes({
    since: 'now',
    live: true,
    filter: function (doc) { //parece que no funciona
          return doc.terapeuta === rutTerapeuta; //sincronizamos sólo las fichas de este terapeuta
        }
  }).on('change', showTodos);

 function addFicha(fichaJson){
   var miFicha=fichaJson;

   var miId=hashFnv32a(miFicha.rut,true); //Debe haber sólo una ficha por paciente, el identificador es el RUT, pero se hace un HASH por privacidad

   console.log("miId:"+miId);

   //miFicha["_id"]=new Date().toISOString();

   miFicha["_id"]=miId;

   console.log(JSON.stringify(miFicha, null, "  "));

   db.put(miFicha, function callback(err, result) {
     if (!err) {
       console.log('Exitosamente grabado en '+nomDB+' !');
       sync();
       showTodos();
       alert("Grabado exitosamente.");
     }else{
       console.log('Error al escribir en '+nomDB+' ! '+err+":"+result);
       alert("Error al grabar");
     }
   });
 }

 function muestraFicha(){
   db.allDocs({include_docs: true, descending: true}, function(err, doc) {
     //console.log(JSON.stringify(doc, null, "  "));
   });
 }

  // We have to create a new todo document and enter it in the database
  function addTodo(text) {
    var todo = {
      _id: new Date().toISOString(),
      title: text,
      completed: false
    };
    db.put(todo, function callback(err, result) {
      if (!err) {
        console.log('Successfully posted a todo!');
      }
    });
  }

  // Show the current list of todos by reading them from the database
  function showTodos() {

    var opts = {
      include_docs: true,
      descending: true,
      attachments: true
        };

    db.allDocs(opts, function(err, doc) {
      redrawTodosUI(doc.rows);
    });//*/

/*
    db.allDocs({include_docs: true,
                descending: true,
                attachments: true
                }, function(err, doc) {
      redrawTodosUI(doc.rows);
    });*/
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
      //alert("borrado");
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

  // Initialise a sync with the remote server
  function sync() {
    syncDom.setAttribute('data-sync-state', 'process');

    var opts = {
        live: true,
        filter: function (doc) {
            return doc.terapeuta === rutTerapeuta; //sincronizamos sólo las fichas de este terapeuta
          }
        };


    db.replicate.to(remoteCouch,opts).then(function (result) {
        // handle 'completed' result
        syncCompleted(result);
      }).catch(function (err) {
        syncError(err);
    });

    db.replicate.from(remoteCouch,opts).then(function (result) {
        // handle 'completed' result
        syncCompleted(result);
      }).catch(function (err) {
        syncError(err);
    });

  }

  // EDITING STARTS HERE (you dont need to edit anything below this line)

  // There was some form or error syncing
  function syncError(err) {
    syncDom.setAttribute('data-sync-state', 'error');
    console.log("syncError:"+err);
  }
  function syncCompleted(result) {
    syncDom.setAttribute('data-sync-state', 'success');
    console.log("syncCompleted:"+result);
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

  // Given an object representing a todo, this will create a list item
  // to display it.
  function createTodoListItem0(todo) {

    console.log(todo);

    var checkbox = document.createElement('input');
    checkbox.className = 'toggle';
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', checkboxChanged.bind(this, todo));

    var label = document.createElement('label');
    label.appendChild( document.createTextNode(todo._id+" : "+todo.datosPersonales.apat+" "+todo.datosPersonales.amat+", "+todo.datosPersonales.nombres));
    label.addEventListener('dblclick', todoDblClicked.bind(this, todo));

    var deleteLink = document.createElement('button');
    deleteLink.className = 'destroy';
    deleteLink.addEventListener( 'click', deleteButtonPressed.bind(this, todo));
    var tborrar=document.createTextNode("Borrar");
    deleteLink.appendChild(tborrar)

    var showLink = document.createElement('button');
    showLink.className = 'destroy';
    showLink.addEventListener( 'click', showButtonPressed.bind(this, todo));
    var t = document.createTextNode("Seleccionar");
    showLink.appendChild(t);

    var divDisplay = document.createElement('div');
    divDisplay.className = 'view';
    //divDisplay.appendChild(checkbox);
    divDisplay.appendChild(label);

    if (puedeBorrar){  divDisplay.appendChild(deleteLink);}

    divDisplay.appendChild(showLink);


    var inputEditTodo = document.createElement('input');
    inputEditTodo.id = 'input_' + todo._id;
    inputEditTodo.className = 'edit';
    inputEditTodo.value = todo.title;
    inputEditTodo.addEventListener('keypress', todoKeyPressed.bind(this, todo));
    inputEditTodo.addEventListener('blur', todoBlurred.bind(this, todo));

    var li = document.createElement('li');
    li.id = 'li_' + todo._id;
    li.appendChild(divDisplay);
    //li.appendChild(inputEditTodo);

    if (todo.completed) {
      li.className += 'complete';
      checkbox.checked = true;
    }

    return li;
  }

  function redrawTodosUI0(todos) {
    var ul = document.getElementById('todo-list');
    ul.innerHTML = '';
    todos.forEach(function(todo) {
      ul.appendChild(createTodoListItem(todo.doc));
    });
  }

  // Given an object representing a todo, this will create a list item
  // to display it.
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
    fila.appendChild(capat);
    fila.appendChild(camat);
    fila.appendChild(cnombres);
    fila.appendChild(caccion);
    //fila.appendChild(cshow);
    //var celda=document.createElement("td");
    //celda.appendChild(divDisplay);
    //fila.appendChild(celda)

    //var li = document.createElement('li');
    //li.id = 'li_' + todo._id;
    //li.appendChild(divDisplay);
    //li.appendChild(inputEditTodo);

    if (todo.completed) {
      li.className += 'complete';
      checkbox.checked = true;
    }

    return fila;
  }


  function redrawTodosUI(todos) {
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


  showTodos();

  if (remoteCouch) {
    sync();
  }
