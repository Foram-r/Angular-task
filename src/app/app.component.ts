import { Component } from '@angular/core';
import { delay } from 'rxjs';
import { CommonService } from './shared/services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showAppSpinner: boolean = false;
  title = 'mini-dashboard';

  constructor(private commonService: CommonService) {}
  ngAfterViewInit() {
    this.commonService.appObservable.pipe(delay(0)).subscribe((item) => {
      if (item.type == 'spinner') {
        this.showAppSpinner = item.value;
      }
    });
  }
}
