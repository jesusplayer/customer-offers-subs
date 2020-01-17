import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionsRoutingModule } from './subscriptions-routing.module';
import { SubscriptionsListComponent } from './subscriptions-list/subscriptions-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [SubscriptionsListComponent],
  imports: [
    CommonModule,
    SubscriptionsRoutingModule,
    NgbModule
  ]
})
export class SubscriptionsModule { }
