import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  group,
} from '@angular/animations';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('flyInOut', [
      transition(":enter", [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s'),
      ]),
      transition(":enter",[
        animate('0.5s', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
