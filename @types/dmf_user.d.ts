/// <reference types="react" />
declare module "dmf_user/login/Login" {
    const Login: () => JSX.Element;
    export default Login;
}
declare module "dmf_user/login/LoginButton" {
    const LoginButton: () => JSX.Element;
    export default LoginButton;
}
declare module "dmf_user/password/ChangePassword" {
    const ChangePassword: () => JSX.Element;
    export default ChangePassword;
}
declare module "dmf_user/password/ResetPassword" {
    const ResetPassword: () => JSX.Element;
    export default ResetPassword;
}
declare module "dmf_user/signup/SignUp" {
    const SignUp: () => JSX.Element;
    export default SignUp;
}
declare module "dmf_user/UpdateUser" {
    const UpdateUser: () => JSX.Element;
    export default UpdateUser;
}
declare module "dmf_user/services/logger-service" {
    const _default: {
        log: {
            (...data: any[]): void;
            (message?: any, ...optionalParams: any[]): void;
        };
    };
    export default _default;
}
declare module "dmf_user/features/todos/model/Todo" {
    export type Todo = {
        id: string;
        title: string;
    };
}
declare module "dmf_user/services/todos-api-client" {
    import { Todo } from "dmf_user/features/todos/model/Todo";
    export function loadSnapshot(): Promise<Todo[]>;
    export function saveSnapshot(data: Todo[]): Promise<undefined>;
}
declare module "dmf_user/services" {
    import * as logger from "dmf_user/services/logger-service";
    import * as todos from "dmf_user/services/todos-api-client";
    const AppServices: {
        logger: typeof logger;
        api: {
            todos: typeof todos;
        };
    };
    const fnc: () => {
        logger: typeof logger;
        api: {
            todos: typeof todos;
        };
    };
    type AppService = ReturnType<typeof fnc>;
    type AppRootService = {
        user: AppService;
    };
    export default AppServices;
    export { AppRootService, AppService };
}
declare module "dmf_user/features/todos/actions" {
    import { Todo } from "dmf_user/features/todos/model/Todo";
    export const addTodo: (title: string) => import("typesafe-actions").PayloadAction<"ADD_TODO", Todo>;
    export const removeTodo: import("typesafe-actions").PayloadActionCreator<"REMOVE_TODO", string>;
    export const loadTodosAsync: {
        request: import("typesafe-actions").PayloadMetaActionCreator<"LOAD_TODOS_REQUEST", unknown, unknown>;
        success: import("typesafe-actions").PayloadActionCreator<"LOAD_TODOS_SUCCESS", Todo[]>;
        failure: import("typesafe-actions").PayloadActionCreator<"LOAD_TODOS_FAILURE", string>;
    };
    export const saveTodosAsync: {
        request: import("typesafe-actions").PayloadMetaActionCreator<"SAVE_TODOS_REQUEST", unknown, unknown>;
        success: import("typesafe-actions").PayloadMetaActionCreator<"SAVE_TODOS_SUCCESS", unknown, unknown>;
        failure: import("typesafe-actions").PayloadActionCreator<"SAVE_TODOS_FAILURE", string>;
    };
}
declare module "dmf_user/store/action" {
    import * as todosActions from "dmf_user/features/todos/actions";
    import { ActionType } from 'typesafe-actions';
    export const userAction: {
        router: {
            push: typeof import("connected-react-router").push;
            replace: typeof import("connected-react-router").replace;
            go: typeof import("connected-react-router").go;
            goBack: typeof import("connected-react-router").goBack;
            goForward: typeof import("connected-react-router").goForward;
        };
        user: {
            todo: typeof todosActions;
        };
    };
    export type AppAction = ActionType<typeof userAction>;
}
declare module "dmf_user/features/todos/reducer" {
    import { Todo } from "dmf_user/features/todos/model/Todo";
    export const isLoadingTodos: any;
    export const todos: any;
    const todosReducer: import("redux").Reducer<import("redux").CombinedState<{
        isLoadingTodos: boolean;
        todos: Todo[];
    }>, import("redux").AnyAction>;
    export default todosReducer;
    export type TodosState = ReturnType<typeof todosReducer>;
}
declare module "dmf_user/features/todos/selectors" {
    import { TodosState } from "dmf_user/features/todos/reducer";
    export const getTodos: (state: TodosState) => import("dmf_user/features/todos/model/Todo").Todo[];
}
declare module "dmf_user/store/reducer" {
    import { StateType } from 'typesafe-actions';
    import { RouterState } from 'connected-react-router';
    const userReducer: import("redux").Reducer<import("redux").CombinedState<{
        todo: import("redux").CombinedState<{
            isLoadingTodos: boolean;
            todos: import("dmf_user/features/todos/model/Todo").Todo[];
        }>;
    }>, import("redux").AnyAction>;
    export type UserState = StateType<typeof userReducer>;
    export type AppState = {
        [key: string]: any;
        router: RouterState<any>;
        user: UserState;
    };
    export { userReducer };
}
declare module "dmf_user/features/todos/epics" {
    import { Epic } from 'redux-observable';
    import { AppState } from "dmf_user/store/reducer";
    import { AppAction } from "dmf_user/store/action";
    import { AppRootService } from "dmf_user/services";
    export const loadTodosEpic: Epic<AppAction, AppAction, AppState, AppRootService>;
    export const saveTodosEpic: Epic<AppAction, AppAction, AppState, AppRootService>;
}
declare module "dmf_user/store/epic" {
    const userEpic: import("redux-observable").Epic<import("connected-react-router").CallHistoryMethodAction<[any]> | import("connected-react-router").CallHistoryMethodAction<[number]> | import("connected-react-router").CallHistoryMethodAction<[]> | import("typesafe-actions").PayloadAction<"ADD_TODO", import("dmf_user/features/todos/model/Todo").Todo> | import("typesafe-actions").PayloadAction<"REMOVE_TODO", string> | import("typesafe-actions").PayloadMetaAction<"LOAD_TODOS_REQUEST", unknown, unknown> | import("typesafe-actions").PayloadAction<"LOAD_TODOS_SUCCESS", import("dmf_user/features/todos/model/Todo").Todo[]> | import("typesafe-actions").PayloadAction<"LOAD_TODOS_FAILURE", string> | import("typesafe-actions").PayloadMetaAction<"SAVE_TODOS_REQUEST", unknown, unknown> | import("typesafe-actions").PayloadMetaAction<"SAVE_TODOS_SUCCESS", unknown, unknown> | import("typesafe-actions").PayloadAction<"SAVE_TODOS_FAILURE", string>, import("connected-react-router").CallHistoryMethodAction<[any]> | import("connected-react-router").CallHistoryMethodAction<[number]> | import("connected-react-router").CallHistoryMethodAction<[]> | import("typesafe-actions").PayloadAction<"ADD_TODO", import("dmf_user/features/todos/model/Todo").Todo> | import("typesafe-actions").PayloadAction<"REMOVE_TODO", string> | import("typesafe-actions").PayloadMetaAction<"LOAD_TODOS_REQUEST", unknown, unknown> | import("typesafe-actions").PayloadAction<"LOAD_TODOS_SUCCESS", import("dmf_user/features/todos/model/Todo").Todo[]> | import("typesafe-actions").PayloadAction<"LOAD_TODOS_FAILURE", string> | import("typesafe-actions").PayloadMetaAction<"SAVE_TODOS_REQUEST", unknown, unknown> | import("typesafe-actions").PayloadMetaAction<"SAVE_TODOS_SUCCESS", unknown, unknown> | import("typesafe-actions").PayloadAction<"SAVE_TODOS_FAILURE", string>, import("dmf_user/store/reducer").AppState, import("services").AppRootService>[];
    export { userEpic };
}
declare module "dmf_user/store" {
    import * as actions from "dmf_user/store/action";
    import * as epic from "dmf_user/store/epic";
    import * as reducer from "dmf_user/store/reducer";
    export { actions, epic, reducer };
}
