import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutermoduleformationComponent } from './ajoutermoduleformation.component';

describe('AjoutermoduleformationComponent', () => {
  let component: AjoutermoduleformationComponent;
  let fixture: ComponentFixture<AjoutermoduleformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutermoduleformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutermoduleformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
