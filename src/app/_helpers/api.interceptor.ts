import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const  headers = new HttpHeaders(
      {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-api-key': '6dbcd228-556e-49f5-9c55-5bf6bd32e788',
      }); 
      headers.set('Access-Control-Allow-Origin', '*');
    const newRequest = request.clone({headers});
    return next.handle(newRequest);
  }
}
