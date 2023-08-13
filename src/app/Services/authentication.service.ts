import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterForm } from '../Interface/register-form';
import {LoginForm } from '../Interface/login-form';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
// baseURL:String ='https://route-ecommerce.onrender.com/';
// baseURL:String ='https://route-ecommerce-app.vercel.app/';
baseURL:String ='https://ecommerce.routemisr.com/';

userToken:any = localStorage.getItem("token");
  constructor(private _HttpClient:HttpClient, private _Router:Router) { }

  register(registerform:RegisterForm):Observable <any>{
    return this._HttpClient.post(this.baseURL+"api/v1/auth/signup",registerform)
  }

  login(loginForm:LoginForm):Observable<any>{
    return this._HttpClient.post(this.baseURL+'api/v1/auth/signin',loginForm)
  }

  logout(){
    localStorage.removeItem('token');
    this.userToken = "";
    this._Router.navigate(['/login']);
  }
}
