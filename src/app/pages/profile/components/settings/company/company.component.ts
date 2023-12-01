import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent implements OnInit {

  title: string = 'Юридические лица';



  companiesArray: any [] = [
    { id: 1, name: 'ТОВ "Юр. лицо - 1"', ipn: 1232333, pdv: 1232333, bankname: 'Bank-1', bankmfo: 333444, location: 'Киев, ул. Гарматная, 31' },
    { id: 2, name: 'ФОП"Юр. лицо - 2"', ipn: 1232333, pdv: 1232333, bankname: 'Bank-1', bankmfo: 333444, location: 'Киев, ул. Гарматная, 31' },
    { id: 3, name: '+', ipn: 1232333, pdv: 1232333, bankname: 'Bank-1', bankmfo: 333444, location: 'Киев, ул. Гарматная, 31' }
  ];

  activatedTab: number = 0;



  setTab(index: number) {
    this.activatedTab = index;
    console.log(this.activatedTab)
  }




  constructor() {
  }

  ngOnInit() {
  }
}
