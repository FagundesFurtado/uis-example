import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxMouseMoveComponent } from './box-mouse-move.component';

describe('BoxMouseMoveComponent', () => {
  let component: BoxMouseMoveComponent;
  let fixture: ComponentFixture<BoxMouseMoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxMouseMoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxMouseMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
