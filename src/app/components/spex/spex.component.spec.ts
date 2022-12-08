import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpexComponent } from './spex.component';

describe('SpexComponent', () => {
  let component: SpexComponent;
  let fixture: ComponentFixture<SpexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
