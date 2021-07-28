import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css'],
})
export class PreguntasComponent implements OnInit {
  tema = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.tema = this.route.snapshot.params.tema;
  }
}
