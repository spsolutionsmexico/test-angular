'use strict';
//import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Registro } from '../registro';
import { RegistroService } from '../registro.service';
import { RegistroDetailsComponent } from '../registro-details/registro-details.component';

@Component({
  //selector: 'app-registro-list',
  selector: 'registro-list',
  templateUrl: './registro-list.component.html',
  styleUrls: ['./registro-list.component.css'],
  //providers: [RegistroService]
})
export class RegistroListComponent implements OnInit {

  registros: Registro[]
  //selectedRegistro: Registro
  
  //constructor(private registroService: RegistroService) { 
  //  console.log('constructor registroService');
  //}
  constructor() { } 

  ngOnInit() {
   console.log('ngOnInit');
   this.registros= [
    {
        id : "001",
        nombre : "isra",
        cp : "1001"
    },
    {
        id : "002",
        nombre : "usuario1",
         cp: "2002"
    }
  ];
   /* try{
    this.registroService
    .getRegistros()
    .then((registros: Registro[]) => {
      this.registros = registros.map((registro) => {
        console.log('registro= ',registro);
        return registro;
      });
    });
  }catch (err) {
    console.log('err ',err);
  }*/
  }

}
