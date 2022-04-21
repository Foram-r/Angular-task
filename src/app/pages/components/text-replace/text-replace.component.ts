import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-replace',
  templateUrl: './text-replace.component.html',
  styleUrls: ['./text-replace.component.scss'],
})
export class TextReplaceComponent implements OnInit {
  initialText: string = 'Good morning';
  customText: any;
  constructor() {}

  ngOnInit(): void {}
  /**
   * To get input value
   */
  onKeyUp(event: any) {
    this.customText = event.target.value;
  }
  /**
   * To replace text with new value
   */
  replaceText() {
    this.initialText = this.customText;
  }
}
