import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerapprenantComponent } from './editerapprenant.component';

describe('EditerapprenantComponent', () => {
  let component: EditerapprenantComponent;
  let fixture: ComponentFixture<EditerapprenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerapprenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerapprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
