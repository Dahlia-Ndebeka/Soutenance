import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutcomadComponent } from './ajoutcomad.component';

describe('AjoutcomadComponent', () => {
  let component: AjoutcomadComponent;
  let fixture: ComponentFixture<AjoutcomadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutcomadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutcomadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
