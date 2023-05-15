import { Injectable } from '@angular/core';
import { Observable, map, of, catchError, throwError, tap, Subject } from 'rxjs';
import { recaudo, RecaudosTable } from './recaudo';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class recaudoService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  recaudosChange = new Subject<RecaudosTable>;
  constructor(private http: HttpClient, private router: Router) { }

  public getrecaudos(
    pageIndex: number, pageSize: number, search:string
  ): Observable<RecaudosTable> {
    const urlEndPoint: string = `https://localhost:7141/api/Recaudos?pageIndex=${pageIndex}&pageSize=${pageSize}&Search=${search}`;

    return this.http.get<RecaudosTable>(urlEndPoint);
  }

  //PDF
  generateReport(){
    return this.http.get('https://localhost:7141/api/Recaudos/generateRotativaPdf?mes=8', { responseType: 'blob' });
  }
}
