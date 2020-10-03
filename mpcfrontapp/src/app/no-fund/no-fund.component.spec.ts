import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoFundComponent } from './no-fund.component';

describe('NoFundComponent', () => {
  let component: NoFundComponent;
  let fixture: ComponentFixture<NoFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoFundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
