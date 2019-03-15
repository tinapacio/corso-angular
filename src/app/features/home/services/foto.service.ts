import { Injectable } from '@angular/core';
import { Foto } from 'src/app/models/foto';

export class FotoService {
  private _titolo: string
  private _foto: Foto
  constructor() { 
    console.log('foto service');
    this.foto = {
      path: 'https://angular.io/assets/images/logos/angular/angular.png',
      id: 3
    }
    this.titolo = 'Hello World';
  }

  public get titolo() : string {
    return this._titolo
  }
  
  public set titolo(v : string) {
    this._titolo = v;
  }

  public get foto() : Foto {
    return this._foto
  }
  
  public set foto(v : Foto) {
    this._foto = v;
  }

  deleteImg(id:number){
    console.log('elimino immagine' + id);
  }
  
  
}
