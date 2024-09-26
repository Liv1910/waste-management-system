import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasteCollectionComponent } from './waste-collection.component';

describe('WasteCollectionComponent', () => {
  let component: WasteCollectionComponent;
  let fixture: ComponentFixture<WasteCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WasteCollectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WasteCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
