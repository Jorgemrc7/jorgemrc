import { Component, Injectable, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase';
@Injectable({
  providedIn: 'root'
})
//import {Storage} from '@ionic/storage-angular';
@Component({
  selector: 'app-loginstate',
  templateUrl: './loginstate.component.html',
  styleUrls: ['./loginstate.component.scss'],
})
export class LoginstateComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  login(u:string,p:string){
    if(u == '' || p == ''){
      console.log('Hay un campo vacio');
      return;
    }
    //logica de inicio de sesion
    localStorage.setItem('nombreuser', u);
    localStorage.setItem('level', '1');
    return true;
  }
  //no se si va esto XD
  /*async authfirebase(user:string, pass:string){
    try{
      const resultado = await firebase.auth().signInWithEmailAndPassword(user, pass);
      if(resultado.user && resultado.user.emailVerified){
      }else{
        console.log('no existe')
      }
    }catch(e){
      
    }
  }*/
}
