import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Business} from '../models/Business';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Attribute} from '../models/Attribute';

const BASE = environment.apiUrl;

@Injectable()
export class BusinessService {
  selectedBusiness: Business;

  constructor(private httpClient: HttpClient) {
  }

  domain = `${BASE}`;

  getSelectedBusiness(id: string): Observable<Business> {
    if (this.selectedBusiness) {
      return Observable.of(this.selectedBusiness);
    } else {
      return this.getBusinessById(id);
    }
  }

  setSelectedBusiness(business: Business) {
    this.selectedBusiness = business;
  }

  getBusinessesByCity(city: string) {
    const apiCall = 'businesses/city';
    const url = `${this.domain}/${apiCall}/${city}`;
    return this.httpClient.get<Business[]>(url);
  }

  getBusinessById(id: string): Observable<Business> {
    const apiCall = 'business';
    const url = `${this.domain}/${apiCall}/${id}`;
    return this.httpClient.get<Business>(url);
  }

  getAttributesByBusinessId(businessId: string): Observable<Attribute[]> {
    const apiCall = 'attribute';
    const url = `${this.domain}/${apiCall}/${businessId}`;
    return this.httpClient.get<Attribute[]>(url);
  }

  getBusinessesByName(name: string): Observable<Business[]> {
    const apiCall = 'businesses';
    const url = `${this.domain}/${apiCall}/${name}`;
    return this.httpClient.get<Business[]>(url);
  }

}
