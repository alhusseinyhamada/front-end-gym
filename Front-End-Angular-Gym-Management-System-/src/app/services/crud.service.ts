import { Injectable } from '@angular/core';
import {Trainer} from './Trainer';
import {catchError, map} from 'rxjs/operators';
import {Observable,throwError} from 'rxjs';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  REST_API:string ='http://172.0.0.1:8000/api/trainers';
  httpHeaders = new HttpHeaders().set('Content-Type','application/json');



  constructor(private httpClient:HttpClient) {

    // getTrainers(){

    //   return  this.httpClient.get(`${this.REST_API}`);


    // }
  }
}
