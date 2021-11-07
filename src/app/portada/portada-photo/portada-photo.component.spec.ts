import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortadaPhotoComponent } from './portada-photo.component';

describe('PortadaPhotoComponent', () => {
  let component: PortadaPhotoComponent;
  let fixture: ComponentFixture<PortadaPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortadaPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortadaPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
