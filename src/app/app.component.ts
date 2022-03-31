import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { FcmService } from './services/fcm.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private fcmService: FcmService,
    private platform: Platform,
  ) {
    this.initApp();
  }

  private initApp() {
    this.platform.ready().then(() => {
      this.fcmService.init();
    });
  }
}
