import { Component, OnInit } from '@angular/core';
import * as PlotlysJS from 'plotly.js-dist-min';
import {PlotlyModule} from 'angular-plotly.js';
import { AlgoritmosService } from '../services/algoritmos.service';

PlotlyModule.plotlyjs = PlotlysJS;

@Component({
  selector: 'app-algoritmos',
  templateUrl: './algoritmos.page.html',
  styleUrls: ['./algoritmos.page.scss'],
})
export class AlgoritmosPage implements OnInit {

  public grafica={
    data:[
      {x:[1,2,3],y:[1,2,3],type:'bar'}],
    layout:{title:'',width:800, height:800}
  };
  //x:number[]=[];
  //y:number[]=[];

  fibonacci:number[]=[];
  primos:number[]=[];

  constructor( private simAlg:AlgoritmosService) { }

  ngOnInit() {
    this.grafica.data[0].y = this.generarRandNum(100);
    this.grafica.data[0].x = this.poblarx(100);
    //this.iterar();
    //this.poblarx();
    this.bubbleSort();
    //this.generar(1000);
  }

  /*generar(n:number){
    this.fibonacci = this.simAlg.fibonacci(n);
    for(let i = 1; i < n; i++){
      this.primos.push(this.simAlg.esPrimo(i));
    }
  }
  */

  poblarx(arr:number):number[]{
    let retorno:number[] = [];
    for(let i = 0; i < arr ; i++){
      retorno.push(i);
    }
    return retorno;
  }

  iterar(){
    setInterval(()=>{
      this.grafica.data[0].y = this.generarRandNum(100);
    },80);
  }

  //para crear numeros aleatorios y establecer un limite
  generarRandNum(n:number):number[]{
    let arr:number[]= [];
    for( let i = 0; i < n; i++){
      arr.push(Math.floor(Math.random() * n));
    }
    return arr;
  }

  delay(tiempo:number):Promise<void>{
    return new Promise(resolve=> setTimeout(resolve, tiempo));
  }

  mergeSort(){

  }


  quickSort(low:number = 0,high = this.grafica.data[0].y.length - 1){
    if(low < high){
      const pivote = this.particion(low, high);
      this.quickSort(low, pivote+1);
      this.quickSort(pivote + 1, high);
    }
  }

  particion(low:number, high:number):number{
    return 0;
  }

  bubbleSort(){
    let longitud = this.grafica.data[0].y.length;
    let checked;
    do{
      checked = false;
      for( let i = 0; i < longitud -1; i++){
        if(this.grafica.data[0].y[i] > this.grafica.data[0].y[i+1]){
          let tmp = this.grafica.data[0].y[1];
          this.grafica.data[0].y[i]=
          this.grafica.data[0].y[i + 1];
          this.grafica.data[0].y[i + 1]= tmp;
          checked = true;
        }
      }
    }while(checked);
  }
}
