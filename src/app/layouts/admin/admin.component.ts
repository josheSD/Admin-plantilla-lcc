import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
declare function IniciarScriptHamburguesa();

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: []
})
export class AdminComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
    IniciarScriptHamburguesa();
    console.log(location.pathname);
  }

}
