//import { Injectable } from '@angular/core';
import { Injectable } from '@angular/core';
import { Registro } from './registro';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RegistroService {
  private registrosUrl = '/api/registros';

  constructor(private http: Http) {
    console.log('constructor(private');
   }
  
  getRegistros(): Promise<void | Registro[]> {
    console.log('getRegistros start');
    console.log('this.registrosUrl: ',this.registrosUrl);
    return this.http.get(this.registrosUrl)
               .toPromise()
               .then(response => response.json() as Registro[])
               .catch(this.handleError);
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
