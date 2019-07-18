import { Component, OnInit } from '@angular/core';
import { AvaliacaoModalPage } from '../avaliacao-modal/avaliacao-modal.page';



@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  avaliacoes;

  constructor() { }

  ngOnInit() {
  }
}
