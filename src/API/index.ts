import {createClient} from '@supabase/supabase-js';
import EncryptedStorage from 'react-native-encrypted-storage';
import {Database} from '@app_types/generated/api.ts';

import {UserController, UserService} from './user';
import {OSMController, OSMService} from './osm';
import {WeatherController, WeatherService} from './weather';
import {RoomsController, RoomsService} from './rooms';

const projectUrl = process.env.PROJECT_URL;
const apiKey = process.env.SUPABASE_ACCESS_TOKEN;

if (!projectUrl || !apiKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient<Database>(projectUrl, apiKey, {
  auth: {
    storage: EncryptedStorage,
  },
});

const supabaseControl = <T extends Record<string, any>>(controller: T) => {
  return new Proxy<typeof controller>(controller, {
    get: (target, prop) => {
      const field = Reflect.get(target, prop);

      if (typeof field === 'function') {
        return async (...args: any[]) => {
          const {error, data} = await (field as Function)(...args);

          if (error) {
            throw new Error(
              `Error calling ${prop.toString()}: ${error.message}`,
            );
          }

          return data;
        };
      }

      return field;
    },
  });
};

export const {user, osm, weather, rooms} = {
  user: new UserController(new UserService()),
  osm: new OSMController(new OSMService()),
  weather: new WeatherController(new WeatherService()),
  rooms: supabaseControl<RoomsController>(
    new RoomsController(new RoomsService()),
  ),
};
