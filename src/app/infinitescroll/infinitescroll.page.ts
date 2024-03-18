/*import { Component, OnInit } from '@angular/core';
import { InfinitescrolldataService } from '../services/infinitescrolldata.service';

@Component({
  selector: 'app-infinitescroll',
  templateUrl: './infinitescroll.page.html',
  styleUrls: ['./infinitescroll.page.scss'],
})
export class InfinitescrollPage implements OnInit {
  
  items:any[]=[];
  nombre:string='';
  categoria:string='';
  proovedor:string='';
  precio:string='';
  cantidad:string='';
  idStock:string='';

  constructor(private infiniteScrollData:InfinitescrolldataService) { }

  ngOnInit() {
    this.generarItems();
  }

  generarItems(){
    const contador = this.generarItems.length + 1;
    for (let i = 0; 1 < 50; i++){
      this.items.push({hora:""+ Math.floor(Math.random()*23) + ":" + Math.floor(Math.random()*59)});
    }
  }

  onIonInfinite(event: any){
    this.generarItems();
  }

  limpiarFormulario(){
    this.nombre='';
    this.categoria='';
    this.proovedor='';
    this.precio='';
    this.cantidad='';
    this.idStock='';
  }
  
  async obtenerDatos(){
    this.items = await this.infiniteScrollData.request_Data();
  }

  async guardar(){
    const datos = {
    nombre:this.nombre,
    categoria:this.categoria,
    proovedor:this.proovedor,
    precio:this.precio,
    cantidad:this.cantidad,
    idStock:this.idStock
    };
    const respuesta = this.infiniteScrollData.upload_Data(datos, this.idStock);
    if(respuesta){
      this.limpiarFormulario();
      console.log('Correcto');
      //mandar mensaje
      //this.updateListElements();
    }else{
      
    }
  }

}
*/

import { Component, OnInit } from '@angular/core';
import { InfinitescrolldataService } from '../services/infinitescrolldata.service';

@Component({
  selector: 'app-infinitescroll',
  templateUrl: './infinitescroll.page.html',
  styleUrls: ['./infinitescroll.page.scss'],
})
export class InfinitescrollPage implements OnInit {
  
  items: any[] = [];
  nombre: string = '';
  categoria: string = '';
  proovedor: string = '';
  precio: string = '';
  cantidad: string = '';
  idStock: string = '';

  constructor(private infiniteScrollData: InfinitescrolldataService) { }

  ngOnInit() {
    this.generarItems();
  }

  generarItems() {
    for (let i = 0; i < 50; i++) {
      this.items.push({ hora: "" + Math.floor(Math.random() * 23) + ":" + Math.floor(Math.random() * 59) });
    }
  }

  onIonInfinite(event: any) {
    this.generarItems();
  }

  limpiarFormulario() {
    this.nombre = '';
    this.categoria = '';
    this.proovedor = '';
    this.precio = '';
    this.cantidad = '';
    this.idStock = '';
  }
  
  async obtenerDatos() {
    this.items = await this.infiniteScrollData.request_Data();
  }

  async guardar() {
    const datos = {
      nombre: this.nombre,
      categoria: this.categoria,
      proovedor: this.proovedor,
      precio: this.precio,
      cantidad: this.cantidad,
      idStock: this.idStock
    };
    try {
      const respuesta = await this.infiniteScrollData.upload_Data(datos, this.idStock);
      if (respuesta) {
        this.limpiarFormulario();
        console.log('Correcto');
        // mandar mensaje
        // this.updateListElements();
      } else {
        console.error('Falló la carga de datos.');
      }
    } catch (error) {
      console.error('Error al cargar los datos:', error);
    }
  }

}
