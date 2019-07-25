import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxClipPathComponent } from './box-clip-path.component';

describe('BoxClipPathComponent', () => {
  let component: BoxClipPathComponent;
  let fixture: ComponentFixture<BoxClipPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxClipPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxClipPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
