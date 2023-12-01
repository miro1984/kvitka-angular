import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header-burger',
  templateUrl: './header-burger.component.html',
  styleUrl: './header-burger.component.scss'
})

export class HeaderBurgerComponent {
  @Input()  toggleMenuOn: boolean;
}
