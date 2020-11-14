import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutermoduletechComponent } from './ajoutermoduletech.component';

describe('AjoutermoduletechComponent', () => {
  let component: AjoutermoduletechComponent;
  let fixture: ComponentFixture<AjoutermoduletechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutermoduletechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutermoduletechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
