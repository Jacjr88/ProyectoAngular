import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { UserData } from './userData';
import { LoginResponse } from './loginResponse';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  login(credentials:LoginRequest):Observable<UserData>{
    return this.httpClient.get<UserData>('../../../assets/data.json').pipe(
      catchError(this.handleError)
    )
  }

  validate(credentials:LoginRequest):Boolean{
    //Aca deberia controlar contra validUser.json y si coincide email y pass devolver true
    let usuarioValido = {
      "email": "jacjr@gmail.com",
      "password":"123456"
    }
    return credentials.email===usuarioValido.email && credentials.password===usuarioValido.password;
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
