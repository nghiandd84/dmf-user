import { RootState } from 'dmf-user';
import * as React from 'react';
import { connect } from 'react-redux';

import { loadTodosAsync, saveTodosAsync } from '../actions';

const mapStateToProps = (state: RootState) => ({
  isLoading: state.todos.isLoadingTodos,
});
const dispatchProps = {
  loadTodos: loadTodosAsync.request,
  saveTodos: saveTodosAsync.request,
};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

type State = {};

class TodoActions extends React.Component<Props, State> {
  render() {
    const { loadTodos, saveTodos } = this.props;
    const isLoading: boolean = this.props.isLoading as boolean;
    return (
      <section>
        <button
          type="button"
          onClick={() => loadTodos(undefined, undefined)}
          disabled={isLoading}
        >
          Load snapshot
        </button>
        &nbsp;
        <button
          type="button"
          onClick={() => saveTodos(undefined, undefined)}
          disabled={isLoading}
        >
          Save snapshot
        </button>
      </section>
    );
  }
}

export default connect(mapStateToProps, dispatchProps)(TodoActions);
