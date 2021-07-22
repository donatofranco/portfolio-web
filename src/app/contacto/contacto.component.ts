import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  mediaImg = [
    {url: "mailto:francoedonato@gmail.com", nombre: "gMail", class:"fas fa-envelope-square"},
    {url: "https://www.linkedin.com/in/franco-donato-71107b192/", nombre: "LinkedIn", class:"fab fa-linkedin"},
    {url: "https://github.com/donatofranco", nombre: "GitHub", class:"fab fa-github-square"}
    //{img: "../../assets/img/fb.png", nombre: "Facebook", class:"fab fa-facebook-square"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
