import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {

  constructor(private http:HttpClient) { }

  URL_BASE = "http://5d262d00eeb36400145c59b3.mockapi.io/avaliacao/";

 list(){
    return this.http.get(this.URL_BASE)
  }

  post(avaliacao){
    return this.http.post(this.URL_BASE, avaliacao)
  }

  delete(avaliacao){
    return this.http.delete(this.URL_BASE + avaliacao)
  }

}
