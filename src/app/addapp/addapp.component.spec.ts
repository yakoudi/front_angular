import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddappComponent } from './addapp.component';

describe('AddappComponent', () => {
  let component: AddappComponent;
  let fixture: ComponentFixture<AddappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
