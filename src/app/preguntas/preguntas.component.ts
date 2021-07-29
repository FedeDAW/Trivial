import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PreguntasService } from '../services/preguntas.service';

@Component({
  selector: 'preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css'],
})
export class PreguntasComponent implements OnInit {
  tema = "";
  preguntas:any = null;
  preguntaActual = 0;
  respuesta = "";
  respuestaCorrecta = false;
  pista = "";
  pistaArray:any = null;
  tiempo = 0;
  timer:any;
  etiqueta = "";

  constructor(private route: ActivatedRoute, private back: PreguntasService) {}

  ngOnInit(): void {
    this.tema = this.route.snapshot.params.tema;
    this.etiqueta = this.route.snapshot.params.etiqueta;


    this.back.getPreguntas(this.tema).subscribe(preguntas => {
      this.preguntas = preguntas;
      this.preguntas = this.filtrarPreguntas(this.preguntas, this.etiqueta);
      console.log(this.tema + '\n');
      console.log(this.preguntas);
    });
    if(!this.respuesta) {
      this.iniciarTiempo();
    }
  }

  comprobarRespuesta() {
    let respuesta = this.respuesta.trim().toLowerCase();
    this.respuestaCorrecta = respuesta == this.preguntas[this.preguntaActual].question.answerOptionList[0].answerText;
  }

  proximaPregunta() {
    this.preguntaActual++;
    this.respuesta = "";
    this.pista = "";
    this.tiempo = 0;
    this.respuestaCorrecta = false;
    clearInterval(this.timer);
    this.iniciarTiempo();
  }

  getPista(){
    this.pista = this.preguntas[this.preguntaActual].question.answerOptionList[0].answerText;
    this.pista = this.pista.replace(/[aeiou]/g, '_');
    this.pistaArray = Array.from(this.pista);
    clearInterval(this.timer);
  }

  incrementarTiempo() {
    if (this.tiempo >= this.preguntas[this.preguntaActual].question.timer){
      this.proximaPregunta();
      return;}
    this.tiempo++;
    //console.log(this.tiempo);
  }

  iniciarTiempo(){
    this.timer = setInterval(() => {this.incrementarTiempo()}, 1000);
  }

  getPreguntaAleatoria() {
    this.preguntaActual = Math.floor(Math.random() * this.preguntas.length);
    console.log(this.preguntaActual);
  }

  filtrarPreguntas(preguntas:[], etiqueta:string) {
    return preguntas.filter((pregunta:any) => pregunta.question.tags.includes(etiqueta));
  }
}
