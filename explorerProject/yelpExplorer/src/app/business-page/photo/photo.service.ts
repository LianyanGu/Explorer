import {Injectable} from '@angular/core';
import {ResponseContentType} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

const BASE = environment.apiUrl;

@Injectable()
export class PhotoService {

  constructor(private httpClient: HttpClient) {
  }

  domain = `${BASE}`;

  getPhotoById(id: string) {
    const apiCall = 'photo';
    const url = `${this.domain}/${apiCall}/${id}`;
    return this.httpClient.get<ResponseContentType.Blob>(url);
  }
}
