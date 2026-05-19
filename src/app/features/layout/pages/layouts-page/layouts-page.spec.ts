import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutsPage } from './layouts-page';

describe('LayoutsPage', () => {
  let component: LayoutsPage;
  let fixture: ComponentFixture<LayoutsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
