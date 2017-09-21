import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { UsuarioService } from './usuario.service';
import { Usuario } from '../../shared/models/usuario';

@Component({
  selector: 'usuario-page',
  templateUrl: './usuario.component.html',
  styles: [`
    .setSelected {
      background-color: #f6f6f6 !important;
    }
  `]
})
export class UsuarioComponent implements OnInit {

  usuarios: Usuario[] = [];
  selected: Usuario;

  constructor(private service: UsuarioService, private router: Router,
     private activeRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(res => {
      if (res) {
        this.usuarios = res;
      }
    });
  }

  setSelected(selected){
    this.selected = selected;
  }

  inserir() {
    this.router.navigateByUrl('usuario/add');
  }

  editar() {
    this.router.navigate(['usuario/', this.selected.id]);
  }

  back(){
    this.router.navigate(['home']);
  }

  excluir() {
  }
}