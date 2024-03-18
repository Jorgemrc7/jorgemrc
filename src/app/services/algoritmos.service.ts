import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlgoritmosService {

  constructor() { }

  /*esPrimo(n:number):number[]{
    //let arr: number[]=[];
    if(n < 0){
      return [];
    }
    for(let i = 2; i <= Math.sqrt(n); i++){
      if(n % i == 0|| n <= 1){
        return 0;
      }
    }
    return ;
    if(this.primos,(n)){
      arreglo.push(n);}
    return this.esPrimo(n, n-1, arr);
    
  }
  */
  fibonacci(n:number):number[]{
    let fibo = [0,1];
    for(let i = 2; i <=n ; i++){
      fibo[i]= fibo[i - 1]+ fibo[i - 2];
    }
    return fibo;
  }
  primos(n:number, divisor: number):boolean{
    if(n <2){
      return false;
    }
    if(n % divisor == 0){
      return false;
    }
    if(divisor * divisor > n){
      return true;
    }
    return this.primos(n, divisor + 1);
  }
}