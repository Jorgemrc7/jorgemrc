/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

} 
*/
/* 

segundo ejemplo de la api

import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {
  weatherData: any; // Variable para almacenar los datos del clima
  weatherResult: any; // Variable para almacenar el resultado de la solicitud

  constructor() { }

  ngOnInit() {
  }

  // Función para obtener el clima al presionar el botón
  getWeather() {
    const apiKey = 'e01b1a92b54cc7caa504cb57dbf9007f';
    const city = 'New York, US'; // Nombre de la ciudad para obtener el clima

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    axios.get(apiUrl)
      .then(response => {
        this.weatherData = response.data;
        // Actualiza el valor de weatherResult con los datos del clima
        this.weatherResult = JSON.stringify(this.weatherData);
      })
      .catch(error => {
        console.error('Error al obtener el clima:', error);
      });
  }
}
*/
import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {
  weatherResult: any; // Variable para almacenar el resultado de la solicitud
  city: string = ''; // Variable para almacenar la ciudad ingresada por el usuario

  constructor() { }

  ngOnInit() {
  }

  // Función para obtener el clima al presionar el botón
  getWeather() {
    const apiKey = 'e01b1a92b54cc7caa504cb57dbf9007f';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apiKey}`;

    axios.get(apiUrl)
      .then(response => {
        this.weatherResult = response.data;
      })
      .catch(error => {
        console.error('Error al obtener el clima:', error);
      });
  }
}
