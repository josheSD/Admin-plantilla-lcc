import { Injectable } from '@angular/core';
import { Router , ActivationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PathNameService {
  
  public rutaActual:string;
  constructor(
    private router: Router,
    private title: Title
  ) { 
  }

  // Obtiene la ruta desde el Padre (Auth) 
  getRutaActualPadre(){
    this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter((evento: ActivationEnd) => evento.snapshot.firstChild === null ),
      map( (evento: ActivationEnd) => evento.snapshot.routeConfig)
      ).subscribe((data:any) => {
          let titulo:string;
          if(data.path == ''){
            titulo = `UGEL Admin`
          }else{
            titulo = `${data.path} - UGEL Admin`
          }
          this.title.setTitle(titulo);
      });
  }

}
