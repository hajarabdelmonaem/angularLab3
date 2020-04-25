import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeparaddComponent } from './deparadd.component';

describe('DeparaddComponent', () => {
  let component: DeparaddComponent;
  let fixture: ComponentFixture<DeparaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeparaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeparaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
