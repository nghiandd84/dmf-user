import * as logger from './logger-service';
import * as todos from './todos-api-client';

const AppServices = {
  logger: logger,
  api: {
    todos: todos,
  },
};

const fnc = () => AppServices;
type AppService = ReturnType<typeof fnc>;

type AppRootService = {
  user: AppService;
};

export default AppServices;

export {
  AppRootService,
  AppService
}