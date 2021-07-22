import { AfterViewInit, Component, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent implements AfterViewInit {
  isPaused = false;

  slides = [
    {img: "../../assets/img/html.png", nombre: "HyperText Markup Language"},
    {img: "../../assets/img/css.png", nombre: "Cascading Style Sheets"},
    {img: "../../assets/img/js2.png", nombre: "JavaScript"},
    {img: "../../assets/img/angular.png", nombre: "Angular"},
    {img: "../../assets/img/java.png", nombre: "Java"},
    {img: "../../assets/img/sql.png", nombre: "Structured Query Language"}
  ];
  
  @ViewChild("carousel") carousel!: ElementRef;

  estiloCarousel: {[key: string]: string} = {};
  
  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    let widthIn:number =  event.target.innerWidth;
    if(widthIn > 480){
      this.estiloCarousel = {
        "marginLeft":"0%"
      }
    }
  }

  ngAfterViewInit(){
    let items = this.carousel.nativeElement.querySelectorAll('.carousel-item');
    let ultimo = items[items.length -1];
    this.carousel.nativeElement.insertAdjacentElement('afterbegin', ultimo);
    /*setInterval(()=>{
      if(!this.isPaused){
        this.next();
      }
    }, 2000);*/
  }

  next(){
    let items = this.carousel.nativeElement.querySelectorAll('.carousel-item');
    let primero = items[0];
    this.estiloCarousel = {
      "marginLeft":"-67%",
      "transition":"all 0.5s"
    }
    setTimeout(()=>{
      this.estiloCarousel = {
        "transition":"none",
        "marginLeft":"-33.5%"
      }
      this.carousel.nativeElement.insertAdjacentElement('beforeend', primero);
    }, 500);
  }

  prev(){
    let items = this.carousel.nativeElement.querySelectorAll('.carousel-item');
    let ultimo = items[items.length-1];
    this.estiloCarousel = {
      "marginLeft":"0%",
      "transition":"all 0.5s"
    }
    setTimeout(()=>{
      this.estiloCarousel = {
        "transition":"none",
        "marginLeft":"-33.5%"
      }
      this.carousel.nativeElement.insertAdjacentElement('afterbegin', ultimo);
    }, 500);
  }
  
  pause(){
    /*if(this.isPaused){
      this.isPaused = false;
    }else{*/
      this.isPaused = true;
    //}
  }

  play(){
    this.isPaused = false;
    console.log(this.isPaused);  }
  /*ngOnInit(): void {
  }*/

}
