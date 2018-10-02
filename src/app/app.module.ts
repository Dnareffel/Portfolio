import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { appRoutes }  from './routerConfig';
import { AppComponent } from './app.component';

import { MaterializeModule } from 'angular2-materialize';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProfilComponent } from './profil/profil.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { DiplomesComponent } from './diplomes/diplomes.component';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ProfilComponent,
    HobbiesComponent,
    DiplomesComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    RouterModule.forRoot(appRoutes),
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
