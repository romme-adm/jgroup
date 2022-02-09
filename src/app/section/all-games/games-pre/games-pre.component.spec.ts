import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesPreComponent } from './games-pre.component';

describe('GamesPreComponent', () => {
  let component: GamesPreComponent;
  let fixture: ComponentFixture<GamesPreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesPreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesPreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
