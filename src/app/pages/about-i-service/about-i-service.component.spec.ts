import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutIServiceComponent } from './about-i-service.component';

describe('AboutIServiceComponent', () => {
  let component: AboutIServiceComponent;
  let fixture: ComponentFixture<AboutIServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutIServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutIServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
