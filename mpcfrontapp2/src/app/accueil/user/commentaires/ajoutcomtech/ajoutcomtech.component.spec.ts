import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutcomtechComponent } from './ajoutcomtech.component';

describe('AjoutcomtechComponent', () => {
  let component: AjoutcomtechComponent;
  let fixture: ComponentFixture<AjoutcomtechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutcomtechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutcomtechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
