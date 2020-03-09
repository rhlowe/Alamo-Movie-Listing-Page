import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'theater-list',
  templateUrl: './theater-list.component.html',
  styleUrls: ['./theater-list.component.scss']
})
export class TheaterListComponent implements OnInit {
  activeTheater = "";

  @Input() cinemas;

  @Output() updateTheater = new EventEmitter;

  constructor() {}

  ngOnInit(): void {
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  selectTheater(theater) {
    this.activeTheater = theater;
    this.updateTheater.emit(this.activeTheater);
  }
}
