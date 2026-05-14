import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsDetailPage } from './students-detail-page';

describe('StudentsDetailPage', () => {
  let component: StudentsDetailPage;
  let fixture: ComponentFixture<StudentsDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsDetailPage],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentsDetailPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
