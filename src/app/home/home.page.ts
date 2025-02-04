import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  question = new FormControl('',[Validators.required]);
  response = new FormControl('',[Validators.required]);

  constructor() {}

}
