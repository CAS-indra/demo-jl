import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desarrollador',
  template: ` <header>Creado por {{ desarrollador }}</header> `,
  styles: [],
})
export class DesarrolladorComponent implements OnInit {
  public desarrollador = 'JL';

  constructor() {}

  ngOnInit(): void {}
}
