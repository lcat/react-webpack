import AppDispatcher from './dispatcher/appDispatcher.js';
import {EventEmitter} from 'events';
import TodoConstants from './constans/todoConstants.js';
import assign from 'object-assign';

var CHANGE_EVENT = 'change';

var _todos = {};

function create(text) {
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _todos[id] = {
    id: id,
    text: text,
    complete: false
  }
}

function update(id, updates) {
  _todos[id] = assign({}, _todos[id], updates);
}

function updateAll(updates) {
  for (var id in _todos) {
    update(id, updates);
  }
}

AppDispatcher.register(function(action) {
  var text;

  switch(action.actionType) {
    case TodoConstants.TODO_CREATE:
      text = action.text.trim();
      if (text) {
        create(text);
        TodoStore.emitChange();
      }
      break;

    case TodoConstants.TODO_TOGGLE_COMPLETE_ALL:
      
  }
})