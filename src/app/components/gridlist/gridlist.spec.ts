import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gridlist } from './gridlist';

describe('Gridlist', () => {
  let component: Gridlist;
  let fixture: ComponentFixture<Gridlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gridlist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gridlist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
