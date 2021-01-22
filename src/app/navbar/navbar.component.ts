import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
title = 'Angular con Bulma';
subtitle = 'Prueba con binding';
  constructor() { }

  ngOnInit(): void {
  }

}
