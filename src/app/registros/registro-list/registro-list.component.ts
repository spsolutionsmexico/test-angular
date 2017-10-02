const { Client } = require('pg');
var bodyParser = require("body-parser");
const JSONbig = require('json-bigint');

import { Component, OnInit } from '@angular/core';
import { Registro } from '../registro';
import { RegistroService } from '../registro.service';
import { RegistroDetailsComponent } from '../registro-details/registro-details.component';
var db;
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});
client.query('select * from usuarios', (err, res) => {
  if (err) {
      console.log(JSON.stringify(err));
      throw err;
  }
  console.log('res: ', JSON.stringify(res));
  const registros=res.rows;
  /*for (let row of res.rows) {
      console.log(JSON.stringify(row));
  }*/
  client.end();
});

@Component({
  //selector: 'app-registro-list',
  selector: 'registro-list',
  templateUrl: './registro-list.component.html',
  styleUrls: ['./registro-list.component.css'],
  //providers: [RegistroService]
})
export class RegistroListComponent implements OnInit {

//  registros: Registro[]
  //selectedRegistro: Registro
  /*registros= [
    {
        id : 123456,
        nombre : "isra",
        cp : "1001"
    },
    {
        id : 7654321,
        nombre : "usuario1",
         cp: "2002"
    }
  ];*/

  constructor() {} 
  ngOnInit() {
   console.log('ngOnInit');
  }

}
