import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishRideComponent } from './publish-ride.component';

describe('EventComponent', () => {
  let component: PublishRideComponent;
  let fixture: ComponentFixture<PublishRideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublishRideComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PublishRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
