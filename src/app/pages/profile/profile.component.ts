import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent  implements OnInit {

  public userName: string = 'Имя Пользователя';
  public userId: number = 2665845;
  public href: string = '';


  constructor(private router: Router) {
  }

  ngOnInit() {
    this.href = this.router.url;
    // console.log(this.router.url);

  }

}

