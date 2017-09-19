import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { EmpresaService } from './empresa.service';
import { Empresa } from '../../shared/models/empresa';
import { AlertService } from "../../components/toast.component/alert.service";

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

  constructor(private service: EmpresaService, private router: Router,
     private alertService: AlertService,
     private activeRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.findAll();
  }

  findAll(){
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

  back(){
    this.router.navigate(['home']);
  }

  excluir() {
    this.service.deleteById(this.selected.id).subscribe((res)=>{
      this.alertService.success('Empresa excluída com sucesso');
      if (res) {
        this.findAll();
      }
    })
  }
}