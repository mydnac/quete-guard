import { Component } from '@angular/core';
import { UserService } from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private userService: UserService){}

  title = 'quete-guard';

  role: string;

  goAnonymous(){
    this.role = 'anonymous';
    this.userService.setRole(this.role);
  }

  goUser(){
    this.role = 'user';
    this.userService.setRole(this.role);
  }

  goAdmin(){
    this.role = 'admin';
    this.userService.setRole(this.role);
  }




}
