import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutpoleformationComponent } from './ajoutpoleformation.component';

describe('AjoutpoleformationComponent', () => {
  let component: AjoutpoleformationComponent;
  let fixture: ComponentFixture<AjoutpoleformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutpoleformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutpoleformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
