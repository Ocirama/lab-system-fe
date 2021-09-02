import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlPrefix = 'http://192.168.1.84:80';

  constructor(private http: HttpClient) {
  }
  getWeight(url: string){
    return this.http.get('http://192.168.1.84:8081' + url);
  }

  get(url: string) {
    return this.http.get(this.urlPrefix + url, this.getRequestOptions());
  }

  post(url: string, data: object) {
    return this.http.post(this.urlPrefix + url, data, this.getRequestOptions());
  }

    delete(url: string) {
    return this.http.delete(`${this.urlPrefix}${url}`);
  }
  private getRequestOptions() {
    const token = sessionStorage.getItem('token');
    const headers = {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : ''
    };
    return {
      headers
    };
  }
}
