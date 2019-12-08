import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  public iconoMostrar:string = 'arrow_drop_down';

  constructor() {

  }
  
  ngOnInit() {
    this.marcador();
  }

  activarAccordion(){
    if($('.sidebar__user').hasClass('display-none')){
      $('.sidebar__user').removeClass('display-none');
      $('.sidebar__user-child').css('display','grid');

      this.iconoMostrar = 'arrow_drop_up';
    }else{
      $('.sidebar__user:nth-child(2)').addClass('display-none')
      $('.sidebar__user:nth-child(3)').addClass('display-none')
      $('.sidebar__user:nth-child(4)').addClass('display-none')
      this.iconoMostrar = 'arrow_drop_down';
    }
  }

  marcador(){
    $('.marcador').click(function(){
      let marcador = $('.marcador');
      for(let marca of marcador){
        $(marca).removeClass('active');
      }
      $(this).addClass('active');
    });
  }

}
