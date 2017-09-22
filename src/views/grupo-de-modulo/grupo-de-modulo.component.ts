import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GrupoDeModulo } from '../../shared/models/grupo-de-modulo';
import { GrupoDeModuloService } from './grupo-de-modulo.service';

@Component({
  selector: 'grupo-de-modulo.component',
  templateUrl: './grupo-de-modulo.component.html',
  styleUrls: ['./grupo-de-modulo.component.css']
})
export class GrupoDeModuloComponent implements OnInit {

	grupos: GrupoDeModulo[] = new Array<GrupoDeModulo>();
	selected: GrupoDeModulo;


  constructor(private service:GrupoDeModuloService, private router:Router) { }

  ngOnInit() {
  	
  	this.findAll();

  }

  findAll() {
  	this.service.findAll().subscribe(res => {
      if (res) {
        this.grupos = res;
      }
    });
  }

   setSelected(selected){
    this.selected = selected;
  }

  inserir() {
    this.router.navigateByUrl('grupo-de-modulo/add');
  }

  editar() {
    this.router.navigate(['grupo-de-modulo/', this.selected.id]);
  }

  back(){
    this.router.navigate(['home']);
  }

  excluir() {
    this.service.deleteById(this.selected.id);
  }

}
