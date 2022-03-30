import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PushNotifications } from '@capacitor/push-notifications';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  id = null;
  constructor(private route: ActivatedRoute) { }

  public ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }

  public resetCount() {
    PushNotifications.removeAllDeliveredNotifications();

  }

}
