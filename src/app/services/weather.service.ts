import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private RUTA_API_UBICACION = "https://freegeoip.app/json";
  
  constructor() { }
}
