import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresaService } from './empresa.service';
import { Empresa } from '../../shared/models/empresa';

@Component({
  selector: 'empresas-page',
  templateUrl: './empresa.component.html',
  styles: [`
    .cmp {
      padding:50px;  
      width: 100%;
    }
    .setSelected {
      background-color: #f6f6f6 !important;
    }
  `]
})
export class EmpresaComponent implements OnInit {

  empresas: Empresa[] = [];
  selected: Empresa;

  constructor(private service: EmpresaService, private router: Router) { }

  ngOnInit() {
    this.service.findAll().subscribe(res => {
      if (res) {
        this.empresas = res;
      }
    });
  }

  setSelected(selected){
    this.selected = selected;
  }

  inserir() {
    this.router.navigateByUrl('empresa/add');
  }

  editar() {
    this.router.navigate(['empresa/', this.selected.id]);
  }
}