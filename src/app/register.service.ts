import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Router } from '@angular/router'
@Injectable()
export class RegisterService {

  constructor(private http:Http) { }

  goAndRegisterUser(userDetails){

    return this.http.post("http://localhost:3019/api/register",userDetails);
  
  }

}

