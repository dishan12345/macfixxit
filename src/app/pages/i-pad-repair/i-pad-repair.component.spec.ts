import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPadRepairComponent } from './i-pad-repair.component';

describe('IPadRepairComponent', () => {
  let component: IPadRepairComponent;
  let fixture: ComponentFixture<IPadRepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IPadRepairComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IPadRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
