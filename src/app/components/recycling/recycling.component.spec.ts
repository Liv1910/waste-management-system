import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecyclingComponent } from './recycling.component';

describe('RecyclingComponent', () => {
  let component: RecyclingComponent;
  let fixture: ComponentFixture<RecyclingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecyclingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecyclingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
