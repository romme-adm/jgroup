import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDetComponent } from './game-det.component';

describe('GameDetComponent', () => {
  let component: GameDetComponent;
  let fixture: ComponentFixture<GameDetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameDetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
