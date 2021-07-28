import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PreguntasService {
  constructor(private http: HttpClient) {}
  getPreguntas(tema: String) {
    return this.http.get('assets/Quiz/' + tema + '.json');
  }
}
