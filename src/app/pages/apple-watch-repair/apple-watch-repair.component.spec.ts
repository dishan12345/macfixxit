import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleWatchRepairComponent } from './apple-watch-repair.component';

describe('AppleWatchRepairComponent', () => {
  let component: AppleWatchRepairComponent;
  let fixture: ComponentFixture<AppleWatchRepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppleWatchRepairComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppleWatchRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
