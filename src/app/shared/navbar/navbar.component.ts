import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { PathNameService } from '../../services/pathName/path-name.service';
import { filter, map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  public imagenSidebar:string = 'more_vert';
  public rutaActual:string;

  constructor(
    private router: Router,
    private title: Title
  ) { 
    this.getRutaActualHijo();
  }
  
  ngOnInit() {

  }

  // Obtiene la ruta desde un componente interno Navbar de (Admin)
  getRutaActualHijo(){
    this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter((evento: ActivationEnd) => evento.snapshot.firstChild === null ),
      map( (evento: ActivationEnd) => evento.snapshot.data.title)
      ).subscribe((data:string) => {
          this.rutaActual = data;
          let titulo:string;
          if(data == ''){
            titulo = `UGEL Admin`
          }else{
            titulo = `${data} - UGEL Admin`
          }
          this.title.setTitle(titulo);
        });
  }

  routerMyProfile(){

    this.router.navigate(['/profile/my-profile']);
  }

  routerConfiguration(){
    this.router.navigate(['/profile/configuration']);
  }

  routerDashboard(){
    this.router.navigate(['/dashboard']);
  }

  cambiarFormatoSidebar(){
    this.imagenSidebar == 'more_vert' ? this.imagenSidebar = 'view_list' : this.imagenSidebar = 'more_vert';
  }

  routerSingOut(){
    this.router.navigate(['/login']);
  }

}
