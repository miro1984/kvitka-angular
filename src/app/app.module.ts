import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileModule } from "./pages/profile/profile.module";
import { HeaderModule } from "./shared/header/header.module";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterModule } from "./shared/footer/footer.module";
import { FooterComponent } from "./shared/footer/footer.component";
import { MenuComponent } from './shared/menu/menu.component';
import { MenuItemComponent } from './shared/menu/menu-item/menu-item.component';
import { MenuMobileComponent } from './shared/menu-mobile/menu-mobile.component';
import { MenuMobileItemComponent } from './shared/menu-mobile/menu-mobile-item/menu-mobile-item.component';




@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        MenuComponent,
        MenuItemComponent,
        MenuMobileComponent,
        MenuMobileItemComponent
    ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      HeaderModule,
      FooterModule,
      ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
