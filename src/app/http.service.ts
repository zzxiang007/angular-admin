import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl = '';

  constructor(private http: HttpClient) {
  }

  public get(data: any): Observable<any> {
    return this.http.get(this.apiUrl + '', {params: {data}})
  }

  public post(data: any): Observable<any> {
    return this.http.post(this.apiUrl + '', data)
  }
}
