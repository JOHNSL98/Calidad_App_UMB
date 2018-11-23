import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FuncionalidadPage } from '../funcionalidad/funcionalidad';

@Component({
  selector: 'page-modelo',
  templateUrl: 'modelo.html'
})
export class ModeloPage {
  constructor(public navCtrl: NavController) {

  }

  goFuncionalidadPage():void{
    this.navCtrl.push(FuncionalidadPage);
  }

}
