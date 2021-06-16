import { NumberService } from './../../shared/services/number.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  currentSize = 2;

  constructor(
    private numberService: NumberService
  ) { }

  ngOnInit(): void {
    this.numberService.getNumber().subscribe(number => {
      this.currentSize = number;
    });
  }

  setSizeLevel(): string {
    return `nivel-${this.currentSize}`
  }
}
