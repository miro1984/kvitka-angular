import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header-phone',
  templateUrl: './header-phone.component.html',
  styleUrl: './header-phone.component.scss'
})
export class HeaderPhoneComponent {

  @Input()  togglePhoneListOn: boolean;
}
