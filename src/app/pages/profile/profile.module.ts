import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {InvoicesComponent} from "./components/invoices/invoices.component";
import {ManagersComponent} from "./components/settings/managers/managers.component";
import {OrdersComponent} from "./components/orders/orders.component";
import {PaymentsComponent} from "./components/payments/payments.component";
import {ProfileTitleComponent} from "./components/profile-title/profile-title.component";
import {SettingsComponent} from "./components/settings/settings.component";
import {SidenavComponent} from "./components/sidenav/sidenav.component";
import {UserComponent} from "./components/user/user.component";
import {CompanyComponent} from "./components/settings/company/company.component";
import {ProfileComponent} from "./profile.component";
import { ProfileInformationComponent } from './components/settings/profile-information/profile-information.component';
import { ProfilePasswordChangeComponent } from './components/settings/profile-password-change/profile-password-change.component';



@NgModule({
  declarations: [
      ProfileComponent,
      InvoicesComponent,
      ManagersComponent,
      OrdersComponent,
      PaymentsComponent,
      ProfileTitleComponent,
      SettingsComponent,
      SidenavComponent,
      UserComponent,
      CompanyComponent,
      ProfileInformationComponent,
      ProfilePasswordChangeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ProfileModule { }
