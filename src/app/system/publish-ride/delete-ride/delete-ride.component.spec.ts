import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRideComponent } from './delete-ride.component';

describe('DeleteRideComponent', () => {
  let component: DeleteRideComponent;
  let fixture: ComponentFixture<DeleteRideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
