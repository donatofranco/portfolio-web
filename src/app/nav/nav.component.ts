import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  estiloMenu: {[key: string]: string} = {};
  estiloNav: {[key: string]: string} = {};
  estiloBtnMenu: {[key: string]: string} = {};

  widthMax:number = 510;

  constructor() { }

  ngOnInit(): void { }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    let widthIn:number =  event.target.innerWidth;
    if(widthIn > this.widthMax){
      this.cerrarMenu();
    }
  }

  mostrarMenu(){
    this.estiloNav = {
      "diplay":"none",
      "visibility":"hidden",
      "backdrop-filter":"blur(0px)"
    }
    this.estiloMenu = {
      "left":"0%"
    }
    this.estiloBtnMenu = {
      "visibility":"hidden"
    }
  }

  cerrarMenu(){
    this.estiloNav = {
      "diplay":"flex",
      "visibility":"visible",
      "backdrop-filter":"blur(5px)"
    }
    this.estiloMenu = {
      "left":"100%"
    }
    this.estiloBtnMenu = {
      "visibility":"visible"
    }
  }
}
