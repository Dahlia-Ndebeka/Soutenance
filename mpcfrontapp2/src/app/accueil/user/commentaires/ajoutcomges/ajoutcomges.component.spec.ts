import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutcomgesComponent } from './ajoutcomges.component';

describe('AjoutcomgesComponent', () => {
  let component: AjoutcomgesComponent;
  let fixture: ComponentFixture<AjoutcomgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutcomgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutcomgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
