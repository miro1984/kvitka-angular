import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrl: './managers.component.scss'
})
export class ManagersComponent implements OnInit {

  title: string = 'Контактные лица';

  managersArray: any [] = [
    { id: 1, name: 'Менеджер-1', phone: '093-123-45-65', email: 'email-1@email.com'},
    { id: 2, name: 'Менеджер-2', phone: '093-123-45-65', email: 'email-2@email.com'},

    { id: 4, name: '+', phone: '000-123-45-67', email: 'email@email.com'}
  ];

  activatedTab: number = 0;


  constructor() {
  }

  ngOnInit() {
  }

  setTab(index: number) {
    this.activatedTab = index;
  }
}
