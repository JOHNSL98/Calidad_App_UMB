import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-resultados',
  templateUrl: 'resultados.html'
})
export class ResultadosPage {
    
    finalfun=0;
    finalexac=0;
    finalint=0;
    finalseg=0;
    finalcfunc=0;

    finalmad=0;
    finaltolfa=0;
    finalrecu=0;
    finalcfia=0;

    finaluente=0;
    finaluapre=0;
    finalopera=0;
    finaloatra=0;
    finalusa=0;

    finalcompti=0;
    finalurecu=0;
    finalefic=0;

    finalcapan=0;
    finalcamb=0;
    finalcapm=0;

    finalfaci=0;
    finalpor=0;

    finalprod=0;
    finalsegu=0;
    finalsati=0;

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
    
    
    ecomt1=0;
    ecomt2=false;
    ecomt3=false;

    eutir1=false;
    eutir2=false;

    conefic=0;
    
    
    ccapa1=false;

    ccamb1=false;
    ccamb2=false;

    conman=0;
    
    
    pfins1=false;

    conpor=0;
    
    
    cupro1=false;

    cuseg1=false;
    cuseg2=false;

    cusat=0;
    
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
    
    
    this.cmadu1 = navParams.get('cmadu1');
    this.cmadu2 = navParams.get('cmadu2');
    this.cmadu3 = navParams.get('cmadu3');
    this.cmadu4 = navParams.get('cmadu4');
    this.cmadu5 = navParams.get('cmadu5');

    this.ctole1 = navParams.get('ctole1');
    this.ctole2 = navParams.get('ctole2');
    this.ctole3 = navParams.get('ctole3');
    this.ctole4 = navParams.get('ctole4');

    this.crecu1 = navParams.get('crecu1');
    this.crecu2 = navParams.get('crecu2');
    this.crecu3 = navParams.get('crecu3');
    this.crecu4 = navParams.get('crecu4');
    this.crecu5 = navParams.get('crecu5');

    this.concon = navParams.get('concon');
    

    this.uente1 = navParams.get('uente1');
    this.uente2 = navParams.get('uente2');

    this.uapre1 = navParams.get('uapre1');

    this.uoper1 = navParams.get('uoper1');
    this.uoper2 = navParams.get('uoper2');
    this.uoper3 = navParams.get('uoper3');

    this.uatra1 = navParams.get('uatra1');
    this.uatra2 = navParams.get('uatra2');

    this.usacon = navParams.get('usacon');
    
    
    this.ecomt1 = navParams.get('ecomt1');
    this.ecomt2 = navParams.get('ecomt2');
    this.ecomt3 = navParams.get('ecomt3');

    this.eutir1 = navParams.get('eutir1');
    this.eutir2 = navParams.get('eutir2');

    this.conefic = navParams.get('conefic');
    
    
    this.ccapa1 = navParams.get('ccapa1');

    this.ccamb1 = navParams.get('ccamb1');
    this.ccamb2 = navParams.get('ccamb2');

    this.conman = navParams.get('conman');
    
    
    this.pfins1 = navParams.get('pfins1');

    this.conpor = navParams.get('conpor');
    
    
    this.cupro1= navParams.get('cupro1');

    this.cuseg1= navParams.get('cuseg1');
    this.cuseg2= navParams.get('cuseg2');

    this.cusat= navParams.get('cusat');
  }
  
  calcularRes(){
    //Funcionalidad
    
    let resultado = 0;
    resultado = this.fadec1 ? resultado+this.fadec1: 0;
    resultado = this.fadec2 ? resultado+this.fadec2: resultado;
    resultado = this.fadec3 ? resultado+this.fadec3: resultado;
    resultado = this.fadec4 ? resultado+this.fadec4: resultado;
    resultado = this.fadec5 ? resultado+this.fadec5: resultado;
    this.finalfun = resultado;

    let resultado2 = 0;
    resultado2 = this.fexac1 ? resultado2+this.fexac1: 0;
    resultado2 = this.fexac2 ? resultado2+1: resultado2;
    resultado2 = this.fexac3 ? resultado2+this.fexac3: resultado2;
    resultado2 = this.fexac4 ? resultado2+this.fexac4: resultado2;
    this.finalexac = resultado2;
    
    let resultado3 = 0;
    resultado3 = this.finte1 ? resultado3+1: 0;
    resultado3 = this.finte2 ? resultado3+1: resultado3;
    resultado3 = this.finte3 ? resultado3+this.finte3: resultado3;
    resultado3 = this.finte4 ? resultado3+1: resultado3;
    resultado3 = this.finte5 ? resultado3+1: resultado3;
    resultado3 = this.finte6 ? resultado3+1: resultado3;
    resultado3 = this.finte7 ? resultado3+1: resultado3;
    this.finalint = resultado3;
    
    let resultado4 = 0;
    resultado4 = this.fsegu1 ? resultado4+1: 0;
    resultado4 = this.fsegu2 ? resultado4+1: resultado4;
    resultado4 = this.fsegu3 ? resultado4+1: resultado4;
    resultado4 = this.fsegu4 ? resultado4+1: resultado4;
    resultado4 = this.fsegu5 ? resultado4+1: resultado4;
    this.finalseg = resultado4;
    
    this.finalcfunc=this.funcon;

    //Confiabilidad

    let resultado5 = 0;
    resultado5 = this.cmadu1 ? resultado5+1: 0;
    resultado5 = this.cmadu2 ? resultado5+1: resultado5;
    resultado5 = this.cmadu3 ? resultado5+1: resultado5;
    resultado5 = this.cmadu4 ? resultado5+1: resultado5;
    resultado5 = this.cmadu5 ? resultado5+this.cmadu5: resultado5;
    this.finalmad = resultado5;
    
    let resultado6 = 0;
    resultado6 = this.ctole1 ? resultado6+1: 0;
    resultado6 = this.ctole2 ? resultado6+1: resultado6;
    resultado6 = this.ctole3 ? resultado6+1: resultado6;
    resultado6 = this.ctole4 ? resultado6+1: resultado6;
    this.finaltolfa = resultado6;
    
    let resultado7 = 0;
    resultado7 = this.crecu1 ? resultado7+1: 0;
    resultado7 = this.crecu2 ? resultado7+this.crecu2: resultado7;
    resultado7 = this.crecu3 ? resultado7+this.crecu3: resultado7;
    resultado7 = this.crecu4 ? resultado7+1: resultado7;
    resultado7 = this.crecu5 ? resultado7+1: resultado7;
    this.finalrecu = resultado7;
    
    this.finalcfia=this.concon;

    //Usabilidad
    
    let resultado8 = 0;
    resultado8 = this.uente1 ? resultado8+this.uente1: 0;
    resultado8 = this.uente2 ? resultado8+this.uente2: resultado8;
    this.finaluente = resultado8;
    
    let resultado9 = 0;
    resultado9 = this.uapre1 ? resultado9+1: 0;
    this.finaluapre = resultado9;
    
    let resultado10 = 0;
    resultado10 = this.uoper1 ? resultado10+this.uoper1: 0;
    resultado10 = this.uoper2 ? resultado10+this.uoper2: resultado10;
    resultado10 = this.uoper3 ? resultado10+1: resultado10;
    this.finalopera = resultado10;
    
    let resultado11 = 0;
    resultado11 = this.uatra1 ? resultado11+this.uatra1: 0;
    resultado11 = this.uatra2 ? resultado11+this.uatra2: resultado11;
    this.finaloatra = resultado11;
    
    this.finalusa=this.usacon;
    
    //Eficiencia
    
    let resultado12 = 0;
    resultado12 = this.ecomt1 ? resultado12+this.ecomt1: 0;
    resultado12 = this.ecomt2 ? resultado12+1: resultado12;
    resultado12 = this.ecomt3 ? resultado12+1: resultado12;
    this.finalcompti = resultado12;
    
    let resultado13 = 0;
    resultado13 = this.eutir1 ? resultado13+1: 0;
    resultado13 = this.eutir2 ? resultado13+1: resultado13;
    this.finalurecu = resultado13;
    
    this.finalefic=this.conefic;
    
    //Capacidad de mantenimiento
    
    let resultado14 = 0;
    resultado14 = this.ccapa1 ? resultado14+1: 0;
    this.finalcapan = resultado14;
    
    let resultado15 = 0;
    resultado15 = this.ccamb1 ? resultado15+1: 0;
    resultado15 = this.ccamb2 ? resultado15+1: resultado15;
    this.finalcamb = resultado15;
    
    this.finalcapm=this.conman;
    
    //Portabilidad
    
    let resultado16 = 0;
    resultado16 = this.pfins1 ? resultado16+1: 0;
    this.finalfaci = resultado16;
    
    this.finalpor=this.conpor;
    
    //Calidad de uso
    
    let resultado17 = 0;
    resultado17 = this.cupro1 ? resultado17+1: 0;
    this.finalprod = resultado17;
    
    let resultado18 = 0;
    resultado18 = this.cuseg1 ? resultado18+1: 0;
    resultado18 = this.cuseg2 ? resultado18+1: resultado18;
    this.finalsegu = resultado18;
    
    this.finalsati=this.cusat;
  }

}