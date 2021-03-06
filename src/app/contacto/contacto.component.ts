import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  mediaImg = [
    {url: "mailto:francoedonato@gmail.com", name: "gMail", class:"icon-mail-squared"},
    {url: "https://www.linkedin.com/in/franco-donato-71107b192/", name: "LinkedIn", class:"icon-linkedin-squared"},
    {url: "https://github.com/donatofranco", name: "GitHub", class:"icon-github-squared"}
    //{img: "../../assets/img/fb.png", name: "Facebook", class:"fab fa-facebook-square"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
