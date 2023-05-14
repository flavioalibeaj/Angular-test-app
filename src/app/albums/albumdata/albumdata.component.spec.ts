import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumdataComponent } from './albumdata.component';

describe('AlbumdataComponent', () => {
  let component: AlbumdataComponent;
  let fixture: ComponentFixture<AlbumdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
