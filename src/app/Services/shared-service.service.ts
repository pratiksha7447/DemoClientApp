import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
   token = localStorage.getItem('token'); // Retrieve the stored token
   headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  readonly url = "https://localhost:44356/api/";
  constructor(private httpClient: HttpClient) { }

  getEmployeeList():Observable<any[]>{
    return this.httpClient.get<any>(`${environment.apiUrl}/Employee`,{headers:this.headers});
  }
  Login(LoginData:any):Observable<any>{
    console.log("HTY")
    return this.httpClient.post<any>(`${environment.apiUrl}/Auth/login`,LoginData);
  }


}
