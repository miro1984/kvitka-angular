import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {

  title: string = 'Заказы';

  constructor() {
  }

  ngOnInit() {
  }
}
