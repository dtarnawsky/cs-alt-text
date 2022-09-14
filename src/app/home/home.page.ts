import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isCardEdit = true;
  isAdhoc = false;
  viewPassword = true;
  constructor() {}
  eyeIconClicked(event) {
    this.viewPassword = !this.viewPassword;
  }
}
