import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EficienciaPage } from '../eficiencia/eficiencia';

@Component({
  selector: 'page-usabilidad',
  templateUrl: 'usabilidad.html'
})
export class UsabilidadPage {
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
    
    
    uente1=0;
    uente2=0;

    uapre1=false;

    uoper1=0;
    uoper2=0;
    uoper3=false;

    uatra1=0;
    uatra2=0;

    usacon=0;

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
    
    
    this.cmadu1= navParams.get('cmadu1');
    this.cmadu2= navParams.get('cmadu2');
    this.cmadu3= navParams.get('cmadu3');
    this.cmadu4= navParams.get('cmadu4');
    this.cmadu5= navParams.get('cmadu5');

    this.ctole1= navParams.get('ctole1');
    this.ctole2= navParams.get('ctole2');
    this.ctole3= navParams.get('ctole3');
    this.ctole4= navParams.get('ctole4');

    this.crecu1= navParams.get('crecu1');
    this.crecu2= navParams.get('crecu2');
    this.crecu3= navParams.get('crecu3');
    this.crecu4= navParams.get('crecu4');
    this.crecu5= navParams.get('crecu5');

    this.concon= navParams.get('concon');
    
    
    this.uente1=0;
    this.uente2=0;

    this.uapre1=false;

    this.uoper1=0;
    this.uoper2=0;
    this.uoper3=false;

    this.uatra1=0;
    this.uatra2=0;

    this.usacon=0;

  }
  
  public Siguiente(){
        this.navCtrl.push(EficienciaPage,{fadec1:this.fadec1,
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

        concon:this.concon,
        
        
        uente1:this.uente1,
        uente2:this.uente2,

        uaprel1:this.uapre1,

        uoper1:this.uoper1,
        uoper2:this.uoper2,
        uoper3:this.uoper3,

        uatra1:this.uatra1,
        uatra2:this.uatra2,

        usacon:this.usacon});
  }

}