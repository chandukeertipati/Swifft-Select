import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersOverviewComponent } from './careers-overview.component';

describe('CareersOverviewComponent', () => {
  let component: CareersOverviewComponent;
  let fixture: ComponentFixture<CareersOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CareersOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CareersOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
