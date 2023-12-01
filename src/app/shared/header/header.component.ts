import {Component, HostListener, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  @Output() toggleMenuOn: boolean;
  @Output() togglePhoneListOn: boolean;

  public widthDisplay: number;
  public sizeDisplay: string = '';
  toggleMenu: boolean = false;
  togglePhone: boolean = false;
  toggleOverlay: boolean = false;


  adressLink: string = "https://goo.gl/maps/orRhRmMmLRFerjMv8";
  addressText: string = "Киев, Гарматная, 31 (Шулявка)";

  constructor() {
  }


  // Остлеживание размера экрана
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.widthDisplay = event.target.innerWidth;
  }


  onButtonClickMenu(toggle: boolean): void {

    if (this.toggleMenu == true) {
      this.toggleOverlay = false;
      this.toggleMenu = false;
      this.toggleMenuOn = false;

    } else {
      if ( this.togglePhone == true ) {
        this.togglePhone = !this.togglePhone;
        this.togglePhoneListOn = false;
        this.toggleMenu = true;
        this.toggleMenuOn = true;
        this.toggleOverlay = true;
      } else {
        this.toggleMenu = true;
        this.toggleMenuOn = true;
        this.toggleOverlay = true;
      }
    }
  }


  onButtonClickPhone(toggle: boolean): void {
    if (this.togglePhone == true) {
      this.toggleOverlay = false;
      this.togglePhone = false;
      this.togglePhoneListOn = false;
    } else {
      if ( this.toggleMenu == true ) {
        this.toggleMenu = !this.toggleMenu;
        this.toggleMenuOn = false;
        this.togglePhone = true;
        this.togglePhoneListOn = true;
        this.toggleOverlay = true;
      } else {
        this.togglePhone = true;
        this.togglePhoneListOn = true;
        this.toggleOverlay = true;
      }
    }
  }

  ngOnInit() {
    this.widthDisplay = window.innerWidth;
  }


}
