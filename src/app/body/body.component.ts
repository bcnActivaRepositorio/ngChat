import { Component, OnInit } from '@angular/core';
import { comentarios } from '../shared/comentarios.data';

@Component({
  selector: 'pr-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
title = 'comments'
diaHora = () => new Date().toLocaleString().replace(',','');
nombre     : any;
comentario: any;
hora: any;
comentarios: any [] = [

];
// avatars
avatarsUser: string = 'https://bootdey.com/img/Content/avatar/avatar2.png';
  constructor() {
    this.comentarios = comentarios;
  }

  ngOnInit(): void {
    console.log('body works');
  }
  // send comments
sendComment(){
console.log(this.nombre);
console.log(this.comentario);

let commentsAds = {
  nombre:     this.nombre,
  alias:      `@${ this.nombre }`,
  comentario: this.comentario,
  hora:       this.diaHora()
}

this.comentarios.push(commentsAds);
}
deleteMe(num: number): void{
this.comentarios.splice(num, 1);
}
}
