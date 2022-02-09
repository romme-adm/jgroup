import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesOnComponent } from './games-on.component';

describe('GamesOnComponent', () => {
  let component: GamesOnComponent;
  let fixture: ComponentFixture<GamesOnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesOnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
