import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.page.html',
  styleUrls: ['./conversor.page.scss'],
})
export class ConversorPage implements OnInit {
  dolares: number=0;
  pesos: number=0;
  cambioDolares: number= 16.72;
  cambioPesos: number= 0.060;

  constructor() { }

  ngOnInit() {
  }

  dolaresAPesos(): number {
    if (this.dolares && !isNaN(this.dolares)) {
      return this.dolares * this.cambioDolares;
    }
    return 0;
  }

  pesosADolares(): number {
    if (this.pesos && !isNaN(this.pesos)) {
      return this.pesos / this.cambioDolares;
    }
    return 0;
  }
}
