import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import {AvaliacaoPage} from '../avaliacao/avaliacao.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  avaliacao = {
    "nome": "avaliacao",
    "url": "https://valecursosonline.com.br/upload/store/[2]design-sem-nome.jpg",
  }

  constructor(public modalController: ModalController, private storage: Storage) {
    this.storage.get('avaliacao').then((data) => {
      if (data) {
        this.avaliacao = data;
      }
    })
  }
  async modal() {
    const modal = await this.modalController.create({
      component: AvaliacaoPage
    });
    await modal.present();

    modal.onDidDismiss().then((dados) => {
      this.avaliacao = dados.data
      this.storage.set("avaliacao", this.avaliacao)
    })
  }
}
