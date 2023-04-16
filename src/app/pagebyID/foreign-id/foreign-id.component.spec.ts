import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignIDComponent } from './foreign-id.component';

describe('ForeignIDComponent', () => {
  let component: ForeignIDComponent;
  let fixture: ComponentFixture<ForeignIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForeignIDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForeignIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
