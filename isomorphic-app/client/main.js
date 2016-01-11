var React = require('react');
var ReactDOM = require('react-dom');
var AppState = require('./client/AppState.js');
var App = require('./App.js');

ReactDOM.render('<App state={AppState} />', document.body);