
import * as React from 'react';
import { connect } from 'react-redux';

import * as selectors from '../selectors';
import * as actions from '../actions';

import TodoListItem from './TodoListItem';
import { Todo } from '../model/Todo';
import { AppState } from '../../../store/reducer';

const mapStateToProps = (state: AppState) => ({
  isLoading: state.user.todo.isLoadingTodos,
  todos: selectors.getTodos(state.user.todo),
});
const dispatchProps = {
  removeTodo: actions.removeTodo,
};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

function TodoList({ isLoading, todos = [], removeTodo }: Props) {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoListItem
            title={todo.title}
            onRemoveClick={() => removeTodo(todo.id)}
          />
        </li>
      ))}
    </ul>
  );
}

export default connect(mapStateToProps, dispatchProps)(TodoList);
