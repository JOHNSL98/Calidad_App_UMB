import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams} from 'ionic-angular';
import { UsabilidadPage } from '../usabilidad/usabilidad';

@Component({
  selector: 'page-confiabilidad',
  templateUrl: 'confiabilidad.html'
})
export class ConfiabilidadPage {
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
    

    cmadu1=false;
    cmadu2=false;
    cmadu3=false;
    cmadu4=false;
    cmadu5=0;

    ctole1=false;
    ctole2=false;
    ctole3=false;
    ctole4=false;

    crecu1=false;
    crecu2=0;
    crecu3=0;
    crecu4=false;
    crecu5=false;

    concon=0;
    

  constructor(public navCtrl: NavController,  public navParams: NavParams) {
    this.fadec1 = navParams.get('fadec1');
    this.fadec2 = navParams.get('fadec2');
    this.fadec3 = navParams.get('fadec3');
    this.fadec4 = navParams.get('fadec4');
    this.fadec5 = navParams.get('fadec5');
    
    this.fexac1 = navParams.get('fexac1');
    this.fexac2 = navParams.get('fexac2');
    this.fexac3 = navParams.get('fexac3');
    this.fexac4 = navParams.get('fexac4');
    
    this.finte1 = navParams.get('finte1');
    this.finte2 = navParams.get('finte2');
    this.finte3 = navParams.get('finte3');
    this.finte4 = navParams.get('finte4');
    this.finte5 = navParams.get('finte5');
    this.finte6 = navParams.get('finte6');
    this.finte7 = navParams.get('finte7');
    
    this.fsegu1 = navParams.get('fsegu1');
    this.fsegu2 = navParams.get('fsegu2');
    this.fsegu3 = navParams.get('fsegu3');
    this.fsegu4 = navParams.get('fsegu4');
    this.fsegu5 = navParams.get('fsegu5');
    
    this.funcon = navParams.get('funcon');
    
    
    this.cmadu1=false;
    this.cmadu2=false;
    this.cmadu3=false;
    this.cmadu4=false;
    this.cmadu5=0;

    this.ctole1=false;
    this.ctole2=false;
    this.ctole3=false;
    this.ctole4=false;

    this.crecu1=false;
    this.crecu2=0;
    this.crecu3=0;
    this.crecu4=false;
    this.crecu5=false;

    this.concon=0;

  }
  
  public Siguiente(){
        this.navCtrl.push(UsabilidadPage,{fadec1:this.fadec1,
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

        funcon:this.funcon,
        
        cmadu1:this.cmadu1,
        cmadu2:this.cmadu2,
        cmadu3:this.cmadu3,
        cmadu4:this.cmadu4,
        cmadu5:this.cmadu5,

        ctole1:this.ctole1,
        ctole2:this.ctole2,
        ctole3:this.ctole3,
        ctole4:this.ctole4,

        crecu1:this.crecu1,
        crecu2:this.crecu2,
        crecu3:this.crecu3,
        crecu4:this.crecu4,
        crecu5:this.crecu5,

        concon:this.concon});
  }

}