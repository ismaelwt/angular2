import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GrupoDeModulo } from '../../../shared/models/grupo-de-modulo';
import { GrupoDeModuloService } from '../grupo-de-modulo.service';

@Component({
  selector: 'grupo-de-modulo-show.component',
  templateUrl: './grupo-de-modulo-show.component.html',
  styles: [``]
})
export class GrupoDeModuloShowComponent implements OnInit {

	grupo:GrupoDeModulo;
	_queryParams:any;


  constructor(private service:GrupoDeModuloService, private router: Router,
    private activeRouter: ActivatedRoute) { }

  ngOnInit() {

  	this.activeRouter.params.subscribe(params => {
      let grupoId: string = params['id'];

      if (grupoId) {
        this._queryParams = { id: grupoId };
        this.service.findById(grupoId).subscribe(grupo => {
          if (grupo) {
            this.grupo = grupo
          }
        });
      }
  	});

  	this.grupo = new GrupoDeModulo();
  }


  back() {
    this.router.navigate(['grupo-de-modulo']);
  }

  onSubmit() {
    if (this.grupo) {
      this.service.save(this.grupo, this._queryParams).subscribe((res) => {
        if (res) {
          this.router.navigate(['grupo-de-modulo']);
        }
      });
    }
  }
}