/*import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private apiUrl: string = 'http://localhost:4001/api'
  constructor(private http: HttpClient) {}

  getHeaders(){}
  return new HttpHeaders({
    'Authorization': ' Bearer ${ sessionStorage.getItem('token') }'
  })
}
*/

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private apiUrl: string = 'http://localhost:3001/api'
  constructor(private http: HttpClient) { }

  getHeaders() {
    return new HttpHeaders({
      'Authorization': `Bearer ${ sessionStorage.getItem('token') }`
    })
  }

  uploadFile(file: File) : Observable<any> {
    const formData = new FormData()
    formData.append('file', file)
    const headers = this.getHeaders()
    return this.http.post(`${this.apiUrl}/upload`, formData, { headers })
  }
}
