
var myDb = function laMyDb() {
  'use strict';

  var ENTER_KEY = 13;
  var newTodoDom = document.getElementById('new-todo');
  var syncDom = document.getElementById('sync-wrapper');

  // EDITING STARTS HERE (you dont need to edit anything above this line)
  this.nomDB='fichamtchtest';
  var db = new PouchDB(this.nomDB);

  // Replace with remote instance, this just replicates to another local instance.
  var remoteCouch = 'tdc.iriscouch.com';

  db.changes({
    since: 'now',
    live: true
  }).on('change', showTodos);

 function addFicha(fichaJson){
   console.log("addFicha");
   var miFicha=fichaJson;
   miFicha["_id"]=new Date().toISOString();
   alert(JSON.stringify(miFicha, null, "  "));
   db.put(miFicha, function callback(err, result) {
     if (!err) {
       console.log('Exitosamente grabado en '+this.nomDB+' !');
       sync();
       muestraFicha();
     }else{
       console.log('Error al escribir en '+this.nomDB+' !');
     }
   });
 }


 function muestraFicha(){
   db.allDocs({include_docs: true, descending: true}, function(err, doc) {
     alert(JSON.stringify(doc, null, "  "));
   });
 }

  // Show the current list of todos by reading them from the database
  function showTodos() {
    db.allDocs({include_docs: true, descending: true}, function(err, doc) {
      redrawTodosUI(doc.rows);
    });
  }

  function checkboxChanged(todo, event) {
    todo.completed = event.target.checked;
    db.put(todo);
  }

  // User pressed the delete button for a todo, delete it
  function deleteButtonPressed(todo) {
    db.remove(todo);
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
    syncDom.setAttribute('data-sync-state', 'syncing');
    var opts = {live: true};
    db.replicate.to(remoteCouch, opts, syncError);
    db.replicate.from(remoteCouch, opts, syncError);
  }

  // EDITING STARTS HERE (you dont need to edit anything below this line)

  // There was some form or error syncing
  function syncError() {
    syncDom.setAttribute('data-sync-state', 'error');
  }



  function redrawTodosUI(todos) {
    var ul = document.getElementById('todo-list');
    ul.innerHTML = '';
    todos.forEach(function(todo) {
      ul.appendChild(createTodoListItem(todo.doc));
    });
  }

/*
  function addEventListeners() {
    newTodoDom.addEventListener('keypress', newTodoKeyPressHandler, false);
  }

  addEventListeners();
  showTodos();
  */
  if (remoteCouch) {
    sync();
  }
};
