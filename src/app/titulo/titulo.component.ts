import { Component } from '@angular/core';

@Component({
  selector: 'app-titulo',
  template: `<h1>{{ title }} funciona</h1>`,
  // templateUrl: './titulo.component.html',
  //styleUrls: ['./titulo.component.scss'],
  styles: [
    `
      h1 {
        color: blue;
      }
    `,
  ],
})
export class TituloComponent {
  title = 'App demo de JL';
}
