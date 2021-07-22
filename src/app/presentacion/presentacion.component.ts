import { Component, OnInit } from '@angular/core';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.scss']
})
export class PresentacionComponent implements OnInit {
  nombreCv: string = 'CV_Franco Donato';
  urlCv: string = './assets/'+this.nombreCv+'.pdf';
  configuracion_ventana = "menubar=no,location=0,toolbar=no,scrollbars=yes,status=no";
  w1: any;

  constructor() { }

  ngOnInit(): void {
  }

  download() {
    FileSaver.saveAs(this.urlCv, this.nombreCv);
  }

  openDoc() {
    this.w1 = window.open(this.urlCv, '#CV', this.configuracion_ventana);
  }

}
