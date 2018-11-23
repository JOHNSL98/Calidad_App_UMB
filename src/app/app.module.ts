import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ModeloPage } from '../pages/modelo/modelo';
import { FuncionalidadPage } from '../pages/funcionalidad/funcionalidad';
import { ConfiabilidadPage } from '../pages/confiabilidad/confiabilidad';
import { UsabilidadPage } from '../pages/usabilidad/usabilidad';
import { EficienciaPage } from '../pages/eficiencia/eficiencia';
import { CmantenimientoPage } from '../pages/cmantenimiento/cmantenimiento';
import { PortabilidadPage } from '../pages/portabilidad/portabilidad';
import { CusoPage } from '../pages/cuso/cuso';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ResultadosPage } from '../pages/resultados/resultados';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ModeloPage,
    FuncionalidadPage,
    ConfiabilidadPage,
    UsabilidadPage,
    EficienciaPage,
    CmantenimientoPage,
    PortabilidadPage,
    CusoPage,
    ResultadosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ModeloPage,
    FuncionalidadPage,
    ConfiabilidadPage,
    UsabilidadPage,
    EficienciaPage,
    CmantenimientoPage,
    PortabilidadPage,
    CusoPage,
    ResultadosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
