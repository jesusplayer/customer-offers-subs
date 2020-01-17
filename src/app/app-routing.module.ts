import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { OffersListComponent } from './offers/offers-list/offers-list.component';
import { SubscriptionsListComponent } from './subscriptions/subscriptions-list/subscriptions-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'offers', pathMatch: 'full' },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: 'offers',
    component: OffersListComponent,
  },
  {
    path: 'subscriptions',
    component: SubscriptionsListComponent,
  },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
