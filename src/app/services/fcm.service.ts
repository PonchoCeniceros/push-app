import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';


@Injectable({
  providedIn: 'root'
})
export class FcmService {

  constructor(private router: Router) { }

  public init() {
    if (Capacitor.getPlatform() !== "web") {
      this.register();
    }
  }

  private register() {
    PushNotifications.requestPermissions().then(permission => {
      if (permission.receive === 'granted') {
        PushNotifications.register();
      } else {
        console.log("Push notifications doesn't work :(");
      }
    });

    /**
     * On success, we should be able to receive notifications
     */
    PushNotifications.addListener('registration',
      (token: Token) => {
        alert('Push registration success, token: ' + token.value);
      }
    );

    /**
     * Some issue with our setup and push will not work
     */
    PushNotifications.addListener('registrationError',
      (error: any) => {
        alert('Error on registration: ' + JSON.stringify(error));
      }
    );

    /**
     * Show us the notification payload if the app is open on our device
     */
    PushNotifications.addListener('pushNotificationReceived',
      (notification: PushNotificationSchema) => {
        alert('Push received: ' + JSON.stringify(notification));
      }
    );

    /**
     * Method called when tapping on a notification
     */
    PushNotifications.addListener('pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        const data = notification.notification.data;
        alert('Push action performed: ' + JSON.stringify(notification));
        if (data.detailsId) {
          this.router.navigateByUrl(`/home/${data.detailsId}`);
        }
      }
    );

  }
}