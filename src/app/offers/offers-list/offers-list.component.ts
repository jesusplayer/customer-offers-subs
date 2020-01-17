import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Offer } from '../offer';
import { OffersService } from '../offers.service';



/**
 * Component class to manage all offers list
 */
@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss']
})
export class OffersListComponent implements OnInit {
    /** observable to manage offers */
  public offers$: Observable<Offer[]>;
  constructor(private offerService: OffersService) { }

  ngOnInit() {
    this.offers$ = this.offerService.list();
  }

}
