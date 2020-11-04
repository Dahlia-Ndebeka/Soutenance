import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulegesComponent } from './moduleges.component';

describe('ModulegesComponent', () => {
  let component: ModulegesComponent;
  let fixture: ComponentFixture<ModulegesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulegesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
