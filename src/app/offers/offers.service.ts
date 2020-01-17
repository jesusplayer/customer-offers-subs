import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Offer } from './offer';


/**
 * Service to manage users offers
 */
@Injectable({
  providedIn: 'root'
})
export class OffersService {
  url = `https://selfcare-service.demo.melita.com/interview/api/offers`;
  constructor(private http: HttpClient) { }

  list(): Observable<Offer[]>{
    return this.http.get<Offer[]>(this.url);
  }
}
