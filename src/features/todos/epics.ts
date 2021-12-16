import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { filter, switchMap, map, catchError } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { loadTodosAsync, saveTodosAsync } from './actions';
import { getTodos } from './selectors';
import { AppState } from '../../store/reducer';
import { AppAction } from '../../store/action';
import { AppRootService } from '../../services';



export const loadTodosEpic: Epic<AppAction, AppAction, AppState, AppRootService> = (
  action$,
  state$,
  { user }
) =>
  action$.pipe(
    filter(isActionOf(loadTodosAsync.request)),
    switchMap(() =>
      from(user.api.todos.loadSnapshot()).pipe(
        map(loadTodosAsync.success),
        catchError((message: string) => of(loadTodosAsync.failure(message)))
      )
    )
  );

export const saveTodosEpic: Epic<AppAction, AppAction, AppState, AppRootService> = (
  action$,
  state$,
  { user }
) =>
  action$.pipe(
    filter(isActionOf(saveTodosAsync.request)),
    switchMap(() => {
      console.log(state$.value, user);
      user.logger.default.log(state$);
      return from(
        user.api.todos.saveSnapshot(getTodos(state$.value.user.todo))
      ).pipe(
        map(saveTodosAsync.success),
        catchError((message: string) => of(saveTodosAsync.failure(message)))
      );
    })
  );
