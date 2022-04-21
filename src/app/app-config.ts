import { InjectionToken } from "@angular/core";

export let APP_CONFIG = new InjectionToken('app.config');
export const AppConfig = {
  TABLE_EXAMPLE_DATA: 'master/example.json',
}
