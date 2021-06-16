import { NumberService } from './../../shared/services/number.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isMenuCollapsed = true;
  currentSize = 2;

  constructor(
    private numberService: NumberService
  ) { }

  ngOnInit(): void {
  }

  toggleCollapse(): void {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  isCurrentSize(n: number): boolean {
    return (n == this.currentSize);
  }

  setNumber(n: number): void {
    this.currentSize = n;
    this.numberService.setNumber(n);
  }
}
