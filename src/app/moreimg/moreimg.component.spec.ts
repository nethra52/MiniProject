import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreimgComponent } from './moreimg.component';

describe('MoreimgComponent', () => {
  let component: MoreimgComponent;
  let fixture: ComponentFixture<MoreimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreimgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
