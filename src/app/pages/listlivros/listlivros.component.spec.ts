import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlivrosComponent } from './listlivros.component';

describe('ListlivrosComponent', () => {
  let component: ListlivrosComponent;
  let fixture: ComponentFixture<ListlivrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListlivrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListlivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
