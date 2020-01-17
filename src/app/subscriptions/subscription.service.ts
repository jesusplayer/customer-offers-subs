import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Subscription } from './subscription';


/**
 * Service to manage users subscriptions
 */
@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  url = `https://selfcare-service.demo.melita.com/interview/api/offers/100/subscriptions`
  constructor(private http: HttpClient) { }

  list(): Observable<Subscription[]>{
    return this.http.get<Subscription[]>(this.url);
  }
}
