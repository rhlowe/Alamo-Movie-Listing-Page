import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmListComponent } from './film-list.component';

describe('FilmListComponent', () => {
  let component: FilmListComponent;
  let fixture: ComponentFixture<FilmListComponent>;
  let selectedTheater;
  let sessions;
  let filmListElement: HTMLElement;

  beforeEach(async(() => {
    selectedTheater = {
      "id": "0003",
      "slug": "village",
      "name": "Village",
    };
    sessions = [
      {
          "filmSlug": "jojo-rabbit",
          "filmName": "JOJO RABBIT",
      },
      {
          "filmSlug": "onward",
          "filmName": "2D ONWARD",
      },
      {
          "filmSlug": "the-invisible-man-2020",
          "filmName": "THE INVISIBLE MAN (2020)",
      },
      {
          "filmSlug": "event-1917",
          "filmName": "1917",
      },
    ];

    TestBed.configureTestingModule({
      declarations: [ FilmListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmListComponent);
    component = fixture.componentInstance;
    component.theater = selectedTheater;
    component.sessions = sessions;
    fixture.detectChanges();

    filmListElement = fixture.nativeElement;
  });

  it('should render FilmListComponent with correct header', () => {
    const h2 = filmListElement.querySelector('h2');
    expect(h2.textContent.toLocaleLowerCase()).toEqual('films playing at village');
  });

  it('should list film data passed in', () => {
    const list = filmListElement.querySelectorAll('li');
    expect(list.length).toEqual(4);
  });
});
