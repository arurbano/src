import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PecesService } from './servicios/peces.service';
import { AppComponent } from './app.component';
import { PecesComponent } from './peces/peces.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { AddpezComponent } from './peces/addpez/addpez.component';
import { AutenticacionService } from './servicios/autenticacion.service';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { InisesComponent } from './autenticacion/inises/inises.component';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { EditpezComponent } from './peces/editpez/editpez.component';
import { GuardService } from './servicios/guard.service';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'peces', component: PecesComponent, canActivate: [GuardService]},
  { path: 'addpez', component: AddpezComponent, canActivate: [GuardService]},
  { path: 'editpez/:key', component: EditpezComponent, canActivate: [GuardService]},
  { path: 'registro', component: RegistroComponent},
  { path: 'iniciosesion', component: InisesComponent },
  { path: '**', component: InicioComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    PecesComponent,
    HeaderComponent,
    InicioComponent,
    AddpezComponent,
    RegistroComponent,
    InisesComponent,
    EditpezComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(routes),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    HttpModule,
  ],

  providers: [PecesService, AutenticacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
