import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripinfoComponent } from './tripinfo.component';

describe('TripinfoComponent', () => {
  let component: TripinfoComponent;
  let fixture: ComponentFixture<TripinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
