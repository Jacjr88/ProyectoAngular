import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominacionComponent } from './nominacion.component';

describe('NominacionComponent', () => {
  let component: NominacionComponent;
  let fixture: ComponentFixture<NominacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NominacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NominacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
