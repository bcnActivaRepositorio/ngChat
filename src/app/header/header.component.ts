import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  url1: string     = 'https://theclick36.com';
  title: string    = 'First exercise IT ACADEMY Angular';
  subtitle: string = 'Made it right. Done'

  constructor() { }

  ngOnInit(): void {
  }

}
