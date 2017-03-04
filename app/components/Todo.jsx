import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import * as actions from 'actions';
import Contenteditable from 'react-contenteditable';

export var Todo = React.createClass({

  handleChange() {
    var newText = this.refs.myRef.htmlEl.innerText,
        { dispatch, id } = this.props;
    dispatch(actions.startEditTextTodo(newText, id));
    },

  render(){
    var {id, text, completed, createdAt, completedAt, dispatch} = this.props,
        todoClassName = completed ? 'todo todo-completed' : 'todo',
        renderDate = () => {
            var message = 'Created ',
                timestamp = createdAt;

            if(completed) {
              message = 'Completed ';
              timestamp = completedAt;
            }

            return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
          },
        renderTodoText = () => {
          return <Contenteditable
                  tagName="p"
                  ref = "myRef"
                  html={text}
                  onBlur={this.handleChange}
                />
            };
    return (
      <div className={todoClassName} >
        <div><input type="checkbox" checked={completed} onClick={()=> {
            dispatch(actions.startToggleTodo(id, !completed));
          }}/></div>
        <div>
          {renderTodoText()}
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    )
  }
});

export default connect()(Todo);
