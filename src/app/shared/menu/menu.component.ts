import { Component } from '@angular/core';
import {Imenu} from "../../models/menu-interface";
import {menudata} from "../../data/menu-data";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  menudata: Imenu[] = menudata;

  toggleDropDown: boolean = false;
  activeIndex: number;

  constructor() {
  }

  ngOnInit(): void {

  }

  // onSelectItem(index: index) :void {
  //
  //    console.log(this.activeIndex);
  //  }

  showDropDown() : void {
    this.toggleDropDown = !this.toggleDropDown;
  }

  hideDropDown(): void {
    this.toggleDropDown = !this.toggleDropDown;
  }
}
