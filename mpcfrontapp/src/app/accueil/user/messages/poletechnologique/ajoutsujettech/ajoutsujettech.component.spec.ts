import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutsujettechComponent } from './ajoutsujettech.component';

describe('AjoutsujettechComponent', () => {
  let component: AjoutsujettechComponent;
  let fixture: ComponentFixture<AjoutsujettechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutsujettechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutsujettechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
