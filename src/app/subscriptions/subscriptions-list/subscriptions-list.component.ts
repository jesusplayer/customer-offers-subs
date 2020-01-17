import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../subscription.service';
import { Subscription } from '../subscription';
import { Observable } from 'rxjs';



/**
 * Component class to manage all subscriptions list
 */
@Component({
  selector: 'app-subscriptions-list',
  templateUrl: './subscriptions-list.component.html',
  styleUrls: ['./subscriptions-list.component.scss']
})
export class SubscriptionsListComponent implements OnInit {
  /** observable to manage subscriptions */
  public subsciptions$: Observable<Subscription[]>
  constructor(private subscriptionService: SubscriptionService) { }

  ngOnInit() {
    this.subsciptions$ = this.subscriptionService.list();
  }

}
