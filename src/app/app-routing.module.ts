import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ContactsComponent} from "./pages/contacts/contacts.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {routesProfile} from "./pages/profile/routes";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'profile', component: ProfileComponent,
    children: [
      ...routesProfile
    ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
