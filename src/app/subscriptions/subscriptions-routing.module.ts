import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptionsListComponent } from './subscriptions-list/subscriptions-list.component';

const routes: Routes = [
  // {
  //   path: 'subscriptions',
  //   loadChildren: './src/app/subscriptions/subscriptions.module#LazyModule'
  // }
  // {
  //   path: 'subscriptions',
  //   component: SubscriptionsListComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionsRoutingModule { }
