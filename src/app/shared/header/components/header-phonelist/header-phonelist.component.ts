import { Component } from '@angular/core';
import {Phonelist} from "../../../../models/phonelist";
import {phonelist as phonelistdata} from "../../../../data/phonelist";

@Component({
  selector: 'app-header-phonelist',
  templateUrl: './header-phonelist.component.html',
  styleUrl: './header-phonelist.component.scss'
})
export class HeaderPhonelistComponent {

  phonelist: Phonelist[] = phonelistdata;

  constructor() {
  }

  ngOnInit() {
  }
}
