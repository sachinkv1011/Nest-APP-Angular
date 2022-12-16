import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityLogViewComponent } from './security-log-view.component';

describe('SecurityLogViewComponent', () => {
  let component: SecurityLogViewComponent;
  let fixture: ComponentFixture<SecurityLogViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityLogViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityLogViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
