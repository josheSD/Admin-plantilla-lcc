import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  public anioActual:any = new Date().getFullYear();
  constructor() { }

  ngOnInit() {
  }

}
