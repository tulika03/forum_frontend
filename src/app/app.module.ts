import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LayoutModule } from '@angular/cdk/layout';
import { MainModule } from './nav/main/main.module';
import {LoginModule} from './login/login.module'

const appRoutes: Routes = [
  {
    path: 'forum',
    loadChildren: './nav/main/main.module#MainModule'
  },
  {
    path: '',
    loadChildren: './login/login.module#LoginModule'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    LayoutModule,
    MainModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
