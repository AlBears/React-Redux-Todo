var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the Dog'
        }, {
          id: 2,
          text: 'Clean the table'
        }, {
          id: 3,
          text: 'Place the Order'
        }, {
          id: 4,
          text: 'Go to the Gym'
        }
      ]
    };
  },
  handleAddTodo: function(text){
    alert('new todo: '+ text);
  },
  render: function(){
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
