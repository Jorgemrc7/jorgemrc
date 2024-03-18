import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { LoginstateComponent } from '../loginstate/loginstate.component';
import { StateloginService } from '../services/statelogin.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {
  
  togglePassword:boolean = false;
  user:string='';
  pass:string='';
  password:string='';

  constructor(private loadingController:LoadingController, private toastController:ToastController,
    private lsc:LoginstateComponent,
    private navController:NavController) { }

  ngOnInit() {
  }

  async presentarLoading(){
    const carga = await this.loadingController.create({
      message:'Por favor espere......'
    });
    await carga.present();
  }
  async dismissLoading(){
    await this.loadingController.dismiss();
  }
  mostrarPassword(){
    this.togglePassword = !this.togglePassword;
  }
  
  async login(){
    /*let estado= this.lsc.login(this.user,this.pass);
    if(estado){
      this.navController.navigateRoot('inicio');
    }*/
    const result = await this.lsc.login(this.user, this.pass);
    if(result){
      
    }else{

    }
  }
  //consola
  mostrarDatos(){
    console.log(this.user);
    console.log(this.pass);
  }
  //datos en toast
  async mostrarToast(){
    const toast = await this.toastController.create({
      message:this.user + this.pass,
      duration:2000,
      position:'bottom',
    });
    //mostrar el toast
    toast.present();
  }
}
