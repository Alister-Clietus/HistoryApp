import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService 
{

constructor(private http: HttpClient,private httpservice:HttpService) { }

public postHttpService(url:string,data:any)
{
  this.httpservice.postdata(url,data).subscribe((item:any)=>
  {

  },
  error=>
  {

  })
}

public getdata(url:any): Observable<any> 
{
  return this.http.get<any>(url);
}


}
