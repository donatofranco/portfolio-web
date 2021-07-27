import { AfterViewInit, Component, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent implements AfterViewInit {
  isPaused = false;
  xActual:number = 0;

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
    setInterval(()=>{
      if(!this.isPaused){
        this.next();
      }
    }, 2000);
  }

  next(){
    let items = this.carousel.nativeElement.querySelectorAll('.carousel-item');
    let primero = items[0];
    if(window.innerWidth <= 480){
      this.estiloCarousel = {
        "marginLeft":"-200%",
        "transition":"all 0.5s"
      }
      setTimeout(()=>{
        this.estiloCarousel = {
          "transition":"none",
          "marginLeft":"-100vw"
        }
        this.carousel.nativeElement.insertAdjacentElement('beforeend', primero);
      }, 500);
    }else if(window.innerWidth <= 768){
      this.estiloCarousel = {
        "marginLeft":"-100%",
        "transition":"all 0.5s"
      }
      setTimeout(()=>{
        this.estiloCarousel = {
          "transition":"none",
          "marginLeft":"-50vw"
        }
        this.carousel.nativeElement.insertAdjacentElement('beforeend', primero);
      }, 500);
    }else{
      this.estiloCarousel = {
        "marginLeft":"-67%",
        "transition":"all 0.5s"
      }
      setTimeout(()=>{
        this.estiloCarousel = {
          "transition":"none",
          "marginLeft":"-33.333vw"
        }
        this.carousel.nativeElement.insertAdjacentElement('beforeend', primero);
      }, 500);
    }
  }

  prev(){
    let items = this.carousel.nativeElement.querySelectorAll('.carousel-item');
    let ultimo = items[items.length-1];
    if(window.innerWidth <= 480){
      this.estiloCarousel = {
        "marginLeft":"0%",
        "transition":"all 0.5s"
      }
      setTimeout(()=>{
        this.estiloCarousel = {
          "transition":"none",
          "marginLeft":"-100vw"
        }
        this.carousel.nativeElement.insertAdjacentElement('afterbegin', ultimo);
      }, 500);
    }else if(window.innerWidth <= 768){
      this.estiloCarousel = {
        "marginLeft":"0%",
        "transition":"all 0.5s"
      }
      setTimeout(()=>{
        this.estiloCarousel = {
          "transition":"none",
          "marginLeft":"-50vw"
        }
        this.carousel.nativeElement.insertAdjacentElement('afterbegin', ultimo);
      }, 500);
    }else{
      this.estiloCarousel = {
        "marginLeft":"0%",
        "transition":"all 0.5s"
      }
      setTimeout(()=>{
        this.estiloCarousel = {
          "transition":"none",
          "marginLeft":"-33.333vw"
        }
        this.carousel.nativeElement.insertAdjacentElement('afterbegin', ultimo);
      }, 500);
    }
  }
  
  pause(){
      this.isPaused = true;
  }

  play(){
    this.isPaused = false;
  }
  
  startX(e:any){
    this.xActual = e.touches[0].clientX;
  }
  
  endX(e:any){
    var xFinal = e.changedTouches[0].clientX;
    if(this.xActual > xFinal+5){
      console.log(this.xActual+" Final: "+xFinal);
      this.next();
      this.isPaused = true;
   }else if(this.xActual < xFinal-5){
      console.log(this.xActual+" Final: "+xFinal);
      this.prev();
      this.isPaused = true;
   }
  }
  /*ngOnInit(): void {
  }*/
}
