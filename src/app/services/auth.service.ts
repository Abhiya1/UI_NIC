import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  baseServerUrl = "http://localhost:4200/api/"

  registerUser(){
    return this.http.post(this.baseServerUrl = "user",null)
  }


}
