import { Component, OnInit } from '@angular/core';
import {Invoice  } from './invoice';

@Component({
  selector: 'app-invioce',
  templateUrl: './invioce.component.html',
  styleUrls: ['./invioce.component.css']
})
export class InvioceComponent implements OnInit {
powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Invoice(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }
get diagnostic() { return JSON.stringify(this.model); }
  constructor() { }

  ngOnInit() {
  }

}
