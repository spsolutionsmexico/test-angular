//import { Injectable } from '@angular/core';
import { Injectable } from '@angular/core';
import { Registro } from './registro';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RegistroService {
  private registrosUrl = '/api/registros';
  private http: Http;
  constructor() {
    console.log('constructor RegistroService ');
   }
   registros: Registro[];

  getRegistros(){
    console.log('return getRegistros ');
    this.registros= [
      {
          id : "123456",
          nombre : "isra",
          cp : "1001"
      },
      {
          id : "654321",
          nombre : "usuario1",
           cp: "2002"
      }
    ];
    return this.registros;
  }
    
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log('errMsg: ',errMsg); // log to console instead
  }
}
/*import { Injectable } from '@angular/core';
@Injectable()
export class RegistroService {
constructor() { 
  console.error('constructor getRegistros'); // log to console instead
}
}*/
