import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { UserData } from './userData';
import { UserRol } from './userRol';
import { LoginResponse } from './loginResponse';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  rol:string="";

  private validUsers = [
    { email: 'jacjr@gmail.com', password: '123456', rol: 'admin' },
    { email: 'user@gmail.com', password: '123456', rol: 'user' }
  ];

  constructor(private httpClient:HttpClient) { }

  login(credentials:LoginRequest):Observable<UserData>{
    return this.httpClient.get<UserData>('../../../assets/data.json').pipe(
      catchError(this.handleError)
    )
  }

  validate(credentials: LoginRequest): UserRol | null {
    const user = this.validUsers.find(u =>
      u.email === credentials.email && u.password === credentials.password
    );

    if (user) {
      this.rol=user.rol;
      return { rol: user.rol };
    }

    return null;
  }

  private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.log('Se ha producido un error', error.error);
    } else{
      console.log('El servicio devolvio el codigo de estado ', error.status, error.error);
    }
    return throwError(() => new Error('Algo falló. Por favor intente mas tarde'));
  }
}
