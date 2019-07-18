import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AvaliacaoModalPage } from './avaliacao-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AvaliacaoModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AvaliacaoModalPage]
})
export class AvaliacaoModalPageModule {}
