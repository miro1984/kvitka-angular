import { Component } from '@angular/core';


@Component({
  selector: 'app-header-location',
  templateUrl: './header-location.component.html',
  styleUrl: './header-location.component.scss'
})
export class HeaderLocationComponent {

  locationLink: string = "https://goo.gl/maps/orRhRmMmLRFerjMv8";
  locationText: string = "Киев, Гарматная, 31 (Шулявка)";
}
