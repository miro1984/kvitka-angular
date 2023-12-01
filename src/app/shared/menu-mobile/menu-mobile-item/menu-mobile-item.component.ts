import {Component, Input} from '@angular/core';
import {Imenu} from "../../../models/menu-interface";

@Component({
  selector: 'app-menu-mobile-item',
  templateUrl: './menu-mobile-item.component.html',
  styleUrl: './menu-mobile-item.component.scss'
})
export class MenuMobileItemComponent {

  @Input() menuitem!: Imenu;

  toggle: boolean = false;

  toggleDropDown() {
    this.toggle = !this.toggle
  }
}
