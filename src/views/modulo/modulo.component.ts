import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ModuloService } from './modulo.service'
import { Modulo } from '../../shared/models/modulo'

@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.css']
})
export class ModuloComponent implements OnInit {

  modulos:Modulo[] = [];
  selected: Modulo;

  constructor(private service:ModuloService, private router:Router) { }

  ngOnInit() {
  	this.findAll();
  }


  findAll(){
    this.service.findAll().subscribe(res => {
      if (res) {
        this.modulos = res;
      }
    });
  }


  setSelected(selected){
    this.selected = selected;
  }

  inserir() {
    this.router.navigateByUrl('modulo/add');
  }

  editar() {
    this.router.navigate(['modulo/', this.selected.id]);
  }

  back(){
    this.router.navigate(['home']);
  }

  excluir() {
  }

}
