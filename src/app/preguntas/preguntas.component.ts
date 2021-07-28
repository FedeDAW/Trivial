import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PreguntasService } from '../services/preguntas.service';

@Component({
  selector: 'preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css'],
})
export class PreguntasComponent implements OnInit {
  tema = '';
  preguntas: any;
  respuesta = "";
  pista = "";
  pistaArray = new Array();
  preguntaActual: number = 0;
  respuestaCorrecta = false;


  constructor(private route: ActivatedRoute, private back: PreguntasService) {}

  ngOnInit(): void {
    this.tema = this.route.snapshot.params.tema;
    this.back.getPreguntas(this.tema.toLowerCase()).subscribe(preguntas => {
      this.preguntas = preguntas;
      console.log(this.tema + '\n');
      console.log(this.preguntas);
    });
  }
  comprobarRespuesta() {
    let respuesta = this.respuesta.trim().toLowerCase();
    this.respuestaCorrecta = respuesta == this.preguntas[this.preguntaActual].question.answerOptionList[0].answerText;
  }
  proximaPregunta() {
    this.preguntaActual++;
    this.respuesta = "";
    this.pista = "";
    this.respuestaCorrecta = false;
  }

  getPista(){
    this.pista = this.preguntas[this.preguntaActual].question.answerOptionList[0].answerText;
    this.pista = this.pista.replace(/[aeiou]/g, '_');
    this.pistaArray = Array.from(this.pista);
  }
}
