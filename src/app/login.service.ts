import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class LoginService {

  constructor(private http:Http) { }

  loginCheck(userDetails){
    return this.http.post("http://localhost:3019/api/login",userDetails);
  }
}
