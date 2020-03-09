import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {
  @Input() theater;
  @Input() sessions;

  constructor() { }

  ngOnInit(): void {
  }

}
