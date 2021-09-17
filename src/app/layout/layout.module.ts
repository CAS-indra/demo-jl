import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { DesarrolladorComponent } from './desarrollador.component';
import { FechaComponent } from './fecha.component';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  declarations: [CabeceraComponent, DesarrolladorComponent, FechaComponent],
  imports: [CommonModule, RouterModule],
  exports: [CabeceraComponent, DesarrolladorComponent, FechaComponent],
})
export class LayoutModule {}
