import { Injectable } from '@angular/core';
import { AppConfig } from 'src/app/app-config';
import { ApiInterfaceService } from './api-interface.service';

@Injectable({
  providedIn: 'root',
})
export class TableExampleService {
  config: any;
  constructor(private apiService: ApiInterfaceService) {
    this.config = AppConfig;
  }
  /**
   * Get listing of books data
   */
async  getBooksData() {
    try {
      const res = await this.apiService
        .get(this.config.TABLE_EXAMPLE_DATA)
        .toPromise();
      return res;
    } catch (e: any) {
      return Promise.reject(e?.error);
    }
  }
}
