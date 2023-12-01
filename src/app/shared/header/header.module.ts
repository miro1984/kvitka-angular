import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderActionComponent} from "./components/header-action/header-action.component";
import {HeaderLocationComponent} from "./components/header-location/header-location.component";
import {HeaderLogoComponent} from "./components/header-logo/header-logo.component";
import {HeaderLanguageComponent} from "./components/header-language/header-language.component";
import { HeaderPhonelistComponent } from './components/header-phonelist/header-phonelist.component';
import { HeaderBurgerComponent } from './components/header-burger/header-burger.component';
import { HeaderPhoneComponent } from './components/header-phone/header-phone.component';






@NgModule({
  declarations: [
      HeaderActionComponent,
      HeaderLocationComponent,
      HeaderLogoComponent,
      HeaderLanguageComponent,
      HeaderPhonelistComponent,
      HeaderBurgerComponent,
      HeaderPhoneComponent
  ],
    exports: [
        HeaderActionComponent,
        HeaderLocationComponent,
        HeaderLogoComponent,
        HeaderLanguageComponent,
        HeaderPhonelistComponent,
        HeaderBurgerComponent,
        HeaderPhoneComponent
    ],
  imports: [
    CommonModule
  ]
})
export class HeaderModule { }
