import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = "http://localhost:4001/api"
  constructor(private http :HttpClient) { }

  register(email: string,password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, {email, password})
  }
  //el enpoint es la ruta  = /register
  //para llamr una funcion se usa this.

  login(email: string,password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`,{email, password})
  }
  getToken() : string | null{
  return sessionStorage.getItem('token')
  }
  isLoggedIn() : boolean {
    return !!sessionStorage.getItem('token')
  }
  logout(): void{
    sessionStorage.removeItem
  }
}
