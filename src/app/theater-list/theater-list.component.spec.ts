import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TheaterListComponent } from './theater-list.component';
import { By } from '@angular/platform-browser';


describe('TheaterListComponent', () => {
  let component: TheaterListComponent;
  let fixture: ComponentFixture<TheaterListComponent>;
  let theaterListElement: HTMLElement;
  let CINEMAS;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheaterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    CINEMAS = [
      {
          "id": "0003",
          "slug": "village",
          "name": "Village",
      },
      {
          "id": "0002",
          "slug": "ritz",
          "name": "Ritz",
      },
      {
          "id": "0008",
          "slug": "mueller",
          "name": "Mueller",
      },
      {
          "id": "0004",
          "slug": "south-lamar",
          "name": "South Lamar",
      },
      {
          "id": "0006",
          "slug": "slaughter-lane",
          "name": "Slaughter Lane",
      },
      {
          "id": "0007",
          "slug": "lakeline",
          "name": "Lakeline",
      }
    ];

    fixture = TestBed.createComponent(TheaterListComponent);
    component = fixture.componentInstance;
    component.cinemas = CINEMAS;
    fixture.detectChanges();

    theaterListElement = fixture.nativeElement;
  });

  it('should render TheaterListComponent', () => {
    const h2 = theaterListElement.querySelector('h2');
    expect(h2.textContent.toLocaleLowerCase()).toEqual('select theater');
  });

  it('should list theaters from the data', () => {
    const list = theaterListElement.querySelectorAll('li');
    expect(list.length).toEqual(6);
  });

  it('should emit the slug of a selected theater', () => {
    let selectedTheater;
    component.updateTheater.subscribe(theater => selectedTheater = theater);
    fixture.debugElement.query(By.css('.theater')).triggerEventHandler('click', null);
    expect(selectedTheater).toEqual(CINEMAS[0].slug);
  })
});
