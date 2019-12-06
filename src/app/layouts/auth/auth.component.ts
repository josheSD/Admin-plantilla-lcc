import { Component, OnInit } from '@angular/core';
import { PathNameService } from '../../services/pathName/path-name.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styles: []
})
export class AuthComponent implements OnInit {

  constructor(
    public _pathNameService : PathNameService
  ) 
  {
    this._pathNameService.getRutaActualPadre()
  }
  
  ngOnInit() {
    
  }

}
