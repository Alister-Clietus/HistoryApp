import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService 
{
  constructor(private http: HttpClient) 
  {

  }

  public postdata<T>(url: string, data: any): Observable<T> 
  {
    return this.http.post<T>(url,data);
  }
}
