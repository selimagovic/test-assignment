import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css'],
})
export class LinkComponent implements OnInit {
  @Input() url: string = '';
  @Output() onLinkClick = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.onLinkClick.emit();
  }
}
