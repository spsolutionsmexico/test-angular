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

//  registros: Registro[]
  //selectedRegistro: Registro
  private registroService: RegistroService;
  registros= this.registroService.getRegistros;
  //constructor(private registroService: RegistroService) { 
  //  console.log('constructor registroService');
  //}
  constructor() {
    console.log('constructor RegistroListComponent.ts');
   } 

  ngOnInit() {
   console.log('ngOnInit');

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
