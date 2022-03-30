import { Component } from '@angular/core';
import { FcmService } from './services/fcm.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private fcmService: FcmService
  ) {
    this.initApp();
  }

  private initApp() {
    this.fcmService.init();
  }
}
