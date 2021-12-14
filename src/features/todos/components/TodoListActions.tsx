import * as React from 'react';
import { RouterState } from 'connected-react-router';

import { connect } from 'react-redux';
import { UserState } from '../../../store/reducer';

import { loadTodosAsync, saveTodosAsync } from '../actions';

const mapStateToProps = (state: {
  user: UserState;
  router: RouterState<any>;
}) => ({
  isLoading: state.user.todo.isLoadingTodos,
  router: state.router
});
const dispatchProps = {
  loadTodos: loadTodosAsync.request,
  saveTodos: saveTodosAsync.request,
};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

type State = {};

class TodoActions extends React.Component<Props, State> {
  render() {
    console.log(this.props.router);
    const { loadTodos, saveTodos } = this.props;
    const isLoading: boolean = this.props.isLoading || false;
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
