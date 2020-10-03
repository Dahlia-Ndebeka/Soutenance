import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutagentComponent } from './ajoutagent.component';

describe('AjoutagentComponent', () => {
  let component: AjoutagentComponent;
  let fixture: ComponentFixture<AjoutagentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutagentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
