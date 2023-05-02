import { NgModule, OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ex01-ng-class',
  templateUrl: './ex01-ng-class.component.html',
  styleUrls: ['./ex01-ng-class.component.scss']
})
export class Ex01NgClassComponent implements OnInit {

  check: boolean = false;


  constructor() { }


  ngOnInit(): void { }


  activeMenu() {
    this.check = !this.check;
    }
  
}