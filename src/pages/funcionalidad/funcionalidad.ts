import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { ConfiabilidadPage } from '../confiabilidad/confiabilidad';

@Component({
  selector: 'page-funcionalidad',
  templateUrl: 'funcionalidad.html'
})


export class FuncionalidadPage {
  fadec1=0;
  fadec2=0;
  fadec3=0;
  fadec4=0;
  fadec5=0;

  fexac1=0;
  fexac2=false;
  fexac3=0;
  fexac4=0;

  finte1=false;
  finte2=false;
  finte3=0;
  finte4=false;
  finte5=false;
  finte6=false;
  finte7=false;

  fsegu1=false;
  fsegu2=false;
  fsegu3=false;
  fsegu4=false;
  fsegu5=false;

  funcon=0;

  constructor(public navCtrl: NavController) {
  
    this.fadec1=0;
    this.fadec2=0;
    this.fadec3=0;
    this.fadec4=0;
    this.fadec5=0;

    this.fexac1=0;
    this.fexac2=false;
    this.fexac3=0;
    this.fexac4=0;

    this.finte1=false;
    this.finte2=false;
    this.finte3=0;
    this.finte4=false;
    this.finte5=false;
    this.finte6=false;
    this.finte7=false;

    this.fsegu1=false;
    this.fsegu2=false;
    this.fsegu3=false;
    this.fsegu4=false;
    this.fsegu5=false;

    this.funcon=0;

  }

  public Siguiente(){
    this.navCtrl.push(ConfiabilidadPage,{fadec1:this.fadec1,
    fadec2:this.fadec2,
    fadec3:this.fadec3,
    fadec4:this.fadec4,
    fadec5:this.fadec5,

    fexac1:this.fexac1,
    fexac2:this.fexac2,
    fexac3:this.fexac3,
    fexac4:this.fexac4,

    finte1:this.finte1,
    finte2:this.finte2,
    finte3:this.finte3,
    finte4:this.finte4,
    finte5:this.finte5,
    finte6:this.finte6,
    finte7:this.finte7,

    fsegu1:this.fsegu1,
    fsegu2:this.fsegu2,
    fsegu3:this.fsegu3,
    fsegu4:this.fsegu4,
    fsegu5:this.fsegu5,

    funcon:this.funcon});
  }

}

