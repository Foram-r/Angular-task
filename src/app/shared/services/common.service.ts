import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiInterfaceService } from './api-interface.service';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  public appSubject = new BehaviorSubject<any>('');
  public appObservable = this.appSubject.asObservable();
  constructor() {}
  /**
   * to show loader to components
   */
  showLoader() {
    this.appSubject.next({
      type: 'spinner',
      value: true,
    });
  }
  /**
   * to hide loader to components
   */
  hideLoader() {
    this.appSubject.next({
      type: 'spinner',
      value: false,
    });
  }
}
