var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

export var Todo = React.createClass({
  editTodo() {
    var newText = this.refs.myRef.innerText,
        { dispatch, id } = this.props;
    dispatch(actions.startEditTextTodo(newText, id));
  },
  render(){
    var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      if(completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };
    return (
      <div className={todoClassName} >
        <div><input type="checkbox" checked={completed} onClick={()=> {
            dispatch(actions.startToggleTodo(id, !completed));
          }}/></div>
        <div>
          <p contentEditable = "true" onBlur={this.editTodo} ref = "myRef">{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    )
  }
});

export default connect()(Todo);
