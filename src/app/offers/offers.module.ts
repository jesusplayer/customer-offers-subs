import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersRoutingModule } from './offers-routing.module';
import { OffersListComponent } from './offers-list/offers-list.component';
import { OffersService } from './offers.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [OffersListComponent],
  imports: [
    CommonModule,
    OffersRoutingModule,
    NgbModule
  ],
  providers: [OffersService]
})
export class OffersModule { }
