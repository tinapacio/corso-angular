import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Foto } from 'src/app/models/foto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() image:Foto
  @Output() delete = new EventEmitter<number>()
  constructor() { }

  ngOnInit() {
  }

  deleteImage(){
    this.delete.emit(this.image.id);
  }

}
