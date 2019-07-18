import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.page.html',
  styleUrls: ['./avaliacao.page.scss'],
})
export class AvaliacaoPage implements OnInit {

  avaliacao = {
    "nome": "",
    "url": ""
  }

  avaliacao_key = "avaliacao";

  constructor(public modalController: ModalController, private camera: Camera, public storage: Storage) { }

  ngOnInit() {
  }

  atualizar() {
    this.modalController.dismiss(this.avaliacao)
  }

  editar() {
    this.modalController.dismiss(this.avaliacao)
  }

  take_picture() {
    const options: CameraOptions = {
      quality: 30, // Qualidade da Foto. 0..100
      destinationType: this.camera.DestinationType.DATA_URL, // Qual é o tipo de destino, referencia local
      encodingType: this.camera.EncodingType.JPEG, // O tipo da extenção da imagem
      mediaType: this.camera.MediaType.PICTURE, // Qual é o tipo de aquivo.. Foto, vídeo..
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.avaliacao.url = 'data:image/jpeg;base64,' + imageData; // Definição do local de salvamento da imagem
    }, (err) => {
      alert(err)
    });
  }


}
