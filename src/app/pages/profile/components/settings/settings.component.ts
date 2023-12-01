import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent implements OnInit {


  public title: string = 'Настройки';
  public href: string = '';

  settingsArray: any [] = [
    { id: 1, label: 'Персональные данные', routerlink: 'profile-information'},
    { id: 1, label: 'Изменить пароль', routerlink: 'password-change'},
    { id: 1, label: 'Контактные лица', routerlink: 'managers'},
    { id: 1, label: 'Юридические лица', routerlink: 'company'}
  ]

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.href = this.router.url;
    console.log(this.router.url);
  }
}
