import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoTrackByComponent } from './no-track-by.component';

describe('NoTrackByComponent', () => {
  let component: NoTrackByComponent;
  let fixture: ComponentFixture<NoTrackByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoTrackByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoTrackByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
