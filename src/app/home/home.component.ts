import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public proyectos = [
    {
      name: 'Aprender angular',
      status: 1,
    },
    {
      name: 'Tener un buen trabajo',
      status: 0,
    },
  ];
  public color = 'brown';
  public value = 5;

  public incrementar(): void {
    this.value++;
  }
  public reducir(): void {
    this.value--;
  }

  public multiplo(cantidad: number): number {
    return cantidad * this.value;
  }
}
