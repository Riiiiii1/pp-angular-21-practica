import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpsonsPage } from './simpsons-page';

describe('SimpsonsPage', () => {
  let component: SimpsonsPage;
  let fixture: ComponentFixture<SimpsonsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpsonsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(SimpsonsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
