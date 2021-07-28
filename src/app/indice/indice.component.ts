import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'indice',
  templateUrl: './indice.component.html',
  styleUrls: ['./indice.component.css']
})
export class IndiceComponent implements OnInit {
  temas = [
    {tema:"Cine",imagen:"assets/img/luna.png"},
    {tema:"Miscelanea",imagen:"assets/img/tierra.png"}
];
  constructor() { }

  ngOnInit(): void {
  }

}
