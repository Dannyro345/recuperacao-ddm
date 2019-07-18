import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-avaliacao-modal',
  templateUrl: './avaliacao-modal.page.html',
  styleUrls: ['./avaliacao-modal.page.scss'],
})
export class AvaliacaoModalPage implements OnInit {

  // Passando as informações
  avaliacao = {
    id: "",
    disciplina: "",
    data: "",
    nota: ""
  }
  constructor(public modal: ModalController) { }

  ngOnInit() {
  }

  // Adicionando 
  add() {
    this.modal.dismiss(this.avaliacao)
  }
}
