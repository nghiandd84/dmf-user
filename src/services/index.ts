import * as logger from './logger-service';
import * as todos from './todos-api-client';

const AppServices = {
  user: {
    logger: logger,
    api: {
      todos: todos,
    },
  },
};

const fnc = () => AppServices;
export type AppService = ReturnType<typeof fnc>;

export default AppServices;
