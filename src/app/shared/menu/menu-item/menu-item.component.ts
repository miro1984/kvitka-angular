import {Component, Input} from '@angular/core';
import {Imenu} from "../../../models/menu-interface";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {
  @Input() menuitem!: Imenu;




}
