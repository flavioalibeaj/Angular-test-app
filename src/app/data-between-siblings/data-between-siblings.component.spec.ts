import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBetweenSiblingsComponent } from './data-between-siblings.component';

describe('DataBetweenSiblingsComponent', () => {
  let component: DataBetweenSiblingsComponent;
  let fixture: ComponentFixture<DataBetweenSiblingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBetweenSiblingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBetweenSiblingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
