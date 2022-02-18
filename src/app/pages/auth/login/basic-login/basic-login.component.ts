import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-Login',
  templateUrl: './basic-Login.component.html',
  styleUrls: ['./basic-Login.component.scss']
})
export class BasicLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
  }

}
