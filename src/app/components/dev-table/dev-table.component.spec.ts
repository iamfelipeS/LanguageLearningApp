import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevTableComponent } from './dev-table.component';

describe('DevTableComponent', () => {
  let component: DevTableComponent;
  let fixture: ComponentFixture<DevTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevTableComponent]
    });
    fixture = TestBed.createComponent(DevTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
