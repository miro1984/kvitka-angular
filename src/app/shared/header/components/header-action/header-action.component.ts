import {Component, OnInit} from '@angular/core';
import {iconsHeaderAction} from "../../../../models/iconsHeaderActionn";
import {iconsheaderaction as iconsdata} from "../../../../data/iconsHeaderActionn"


@Component({
  selector: 'app-header-action',
  templateUrl: './header-action.component.html',
  styleUrl: './header-action.component.scss'
})
export class HeaderActionComponent implements OnInit {


  iconsheaderaction: iconsHeaderAction[] = iconsdata;

  constructor() {
  }


  ngOnInit() {
  }
}
