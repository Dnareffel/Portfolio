import { Routes } from '@angular/router';

import { ProfilComponent } from './profil/profil.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { DiplomesComponent } from './diplomes/diplomes.component';
import { ExperienceComponent } from './experience/experience.component';

export const appRoutes: Routes = [
    
  { 
    path: 'profil', 
    component: ProfilComponent
  },

  { 
    path: 'hobbies', 
    component: HobbiesComponent
  },


  { 
    path: 'diplomes', 
    component: DiplomesComponent
  },


  { 
    path: 'experience', 
    component: ExperienceComponent
  },




];
