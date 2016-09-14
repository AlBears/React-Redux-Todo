var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
	console.log('New state ',store.getState());
});

store.dispatch(actions.addTodo('Clean the Garage'));
store.dispatch(actions.setSearchText('Clean'));
store.dispatch(actions.toggleShowCompleted());
//load foundation

$(document).foundation();

//load css
require('style!css!sass!applicationStyles');

ReactDOM.render(
<Provider store={store}>
	<TodoApp/>
</Provider>,
	document.getElementById('app')
);
