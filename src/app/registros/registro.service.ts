//import { Injectable } from '@angular/core';
import { Injectable } from '@angular/core';
import { Registro } from './registro';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RegistroService {
  private registrosUrl = '/api/registros';

  constructor(private http: Http) { }

  getRegistros(): Promise<void | Registro[]> {
    console.error('getRegistros start'); // log to console instead
    return this.http.get(this.registrosUrl)
               .toPromise()
               .then(response => response.json() as Registro[])
               .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error('errMsg: ',errMsg); // log to console instead
  }
}
