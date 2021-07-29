import { Component, OnInit } from '@angular/core';
import { PreguntasService } from '../services/preguntas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-etiquetas',
  templateUrl: './etiquetas.component.html',
  styleUrls: ['./etiquetas.component.css'],
})
export class EtiquetasComponent implements OnInit {
  tema = '';
  preguntas: any;
  tags = new Map();

  constructor(
    private back: PreguntasService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.tema = this.route.snapshot.params.tema;

    this.back.getPreguntas(this.tema).subscribe((preguntas) => {
      this.preguntas = preguntas;

      for (let i = 0; i < this.preguntas.length; i++) {
        for (let j = 0; j < this.preguntas[i].question.tags.length; j++) {
          let etiqueta = this.preguntas[i].question.tags[j];

          if (!this.tags.has(etiqueta)) {
            this.tags.set(etiqueta, 0);
          } else {
            this.tags.set(etiqueta, this.tags.get(etiqueta) + 1);
          }
        }
      }

      console.log(this.tags);

      console.log(this.preguntas);
    });
  }
}
