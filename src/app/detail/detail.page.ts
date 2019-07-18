import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  id;
  avaliacao;

  constructor(private route: ActivatedRoute, private http: HttpClient) { 
    this.id = this.route.snapshot.paramMap.get('id')
    this.avaliacao = this.http.get("http://5d262d00eeb36400145c59b3.mockapi.io/avaliacao/" + this.id).subscribe(
      (data) => {
        this.avaliacao = data
      }
    )
  }

  ngOnInit() {
  }

}
