import { Component } from '@angular/core';

@Component({
  selector: 'app-header-language',
  templateUrl: './header-language.component.html',
  styleUrl: './header-language.component.scss'
})
export class HeaderLanguageComponent {

  toggleLanguage:boolean = true;

  constructor() {
  }

  ngOnInit() {
  }

  changeLanguage(): void {
    this.toggleLanguage = !this.toggleLanguage;
  }
}
