import { Component, OnInit } from '@angular/core';
import { AvaliacaoModalPage } from '../avaliacao-modal/avaliacao-modal.page';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AvaliacaoService } from '../services/avaliacao.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  avaliacoes;

  constructor(private http: HttpClient, public loadingController: LoadingController, public modalController: ModalController, private avaliacaoService: AvaliacaoService) {
    this.loadingController.create({
      message: "Carregando"
    }).then((loader) => {
      loader.present()
      this.avaliacaoService.list().subscribe(
        (data) => {
          this.avaliacoes = data
          loader.dismiss()
        }
      )
    })
  }
  add(avaliacao) {
    this.loadingController.create({
      message: "Carregando"
    }).then((loader) => {
      loader.present()
      this.avaliacaoService.post(avaliacao).subscribe(
        (data) => {
          this.avaliacoes.push(data)
          loader.dismiss()
        }
      )
    })
  }

  remove(avaliacao) {
    this.loadingController.create({
      message: "Removido com sucesso !"
    }).then((loader) => {
      loader.present()
      this.avaliacaoService.delete(avaliacao.id).subscribe(
        (data) => {
          var i = this.avaliacoes.indexOf(avaliacao);
          this.avaliacoes.splice(i, 1);
          loader.dismiss()
        }
      )
    })
  }

  async modal() {
    const modal = await this.modalController.create({
      component: AvaliacaoModalPage
    });
    await modal.present();

    modal.onDidDismiss().then((dados) => {
      this.add(dados.data)
    })
  }
  ngOnInit() {
  }
}
