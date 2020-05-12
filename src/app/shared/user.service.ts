import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  role = '';

  getRole(){
    return this.role;
  }

  setRole(role: string){
    this.role = role;
  }
}
