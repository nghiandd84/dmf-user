import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { filter, switchMap, map, catchError } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { RootAction, RootState, Services } from 'dmf-user';
import { loadTodosAsync, saveTodosAsync } from './actions';
import { getTodos } from './selectors';
export const loadTodosEpic: Epic<RootAction, RootAction, RootState, Services> =
  (action$, state$, { api }) =>
    action$.pipe(
      filter(isActionOf(loadTodosAsync.request)),
      switchMap(() =>
        from(api.todos.loadSnapshot()).pipe(
          map(loadTodosAsync.success),
          catchError((message: string) => of(loadTodosAsync.failure(message)))
        )
      )
    );

export const saveTodosEpic: Epic<RootAction, RootAction, RootState, Services> =
  (action$, state$, { api }) =>
    action$.pipe(
      filter(isActionOf(saveTodosAsync.request)),
      switchMap(() => {
        console.log(state$.value);
        return from(api.todos.saveSnapshot(getTodos(state$.value.todos))).pipe(
          map(saveTodosAsync.success),
          catchError((message: string) => of(saveTodosAsync.failure(message)))
        );
      })
    );
