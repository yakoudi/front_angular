import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListanalysepatientComponent } from './listanalysepatient.component';

describe('ListanalysepatientComponent', () => {
  let component: ListanalysepatientComponent;
  let fixture: ComponentFixture<ListanalysepatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListanalysepatientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListanalysepatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
