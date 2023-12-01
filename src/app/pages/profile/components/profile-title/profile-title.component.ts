import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-profile-title',
  templateUrl: './profile-title.component.html',
  styleUrl: './profile-title.component.scss'
})
export class ProfileTitleComponent implements OnInit {

  @Input() title: string;

  constructor() {
  }

  ngOnInit() {
  }
}
