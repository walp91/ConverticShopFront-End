import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Usuario } from '../interface/usuario';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlauth='http://localhost:8080/user/login';
  private httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' });

  constructor(
    private http:HttpClient
  ) { 
    
  }
  checklogin(usuario:Usuario):Observable<Usuario>{
    return this.http.<Usuario>(this.urlauth,usuario,{headers:this.httpHeaders})
  }

}

