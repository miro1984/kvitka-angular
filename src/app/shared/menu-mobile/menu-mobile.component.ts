import { Component } from '@angular/core';
import {Imenu} from "../../models/menu-interface";
import {menudata} from "../../data/menu-data";

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrl: './menu-mobile.component.scss'
})
export class MenuMobileComponent {

  menudata: Imenu[] = menudata;

  toggleDropDown: boolean = false;
  activeIndex: number;
}
