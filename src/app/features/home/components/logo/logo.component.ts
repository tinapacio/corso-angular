import { Component, OnInit, Input } from '@angular/core';
import { Foto } from 'src/app/models/foto';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  @Input() image: Foto;
  constructor() { }

  ngOnInit() {
  }

}
