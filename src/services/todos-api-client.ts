import { Todo } from "../features/todos/model/Todo";


let todos: Todo[] = [
  { id: '0', title: `Yo, your snapshot has been loaded successfully!` },
];

export function loadSnapshot(): Promise<Todo[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(todos);
    }, 500);
  });
}

export function saveSnapshot(data: Todo[]): Promise<undefined> {
  return new Promise<undefined>((resolve, reject) => {
    setTimeout(() => {
      todos = data;
      resolve(undefined);
    }, 500);
  });
}
