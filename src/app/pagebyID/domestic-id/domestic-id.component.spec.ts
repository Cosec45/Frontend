import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticIDComponent } from './domestic-id.component';

describe('DomesticIDComponent', () => {
  let component: DomesticIDComponent;
  let fixture: ComponentFixture<DomesticIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomesticIDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomesticIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
