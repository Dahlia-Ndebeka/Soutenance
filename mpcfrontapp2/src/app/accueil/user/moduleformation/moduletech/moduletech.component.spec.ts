import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuletechComponent } from './moduletech.component';

describe('ModuletechComponent', () => {
  let component: ModuletechComponent;
  let fixture: ComponentFixture<ModuletechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuletechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuletechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
