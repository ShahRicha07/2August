import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFormComponentComponent } from './category-form-component.component';

describe('CategoryFormComponentComponent', () => {
  let component: CategoryFormComponentComponent;
  let fixture: ComponentFixture<CategoryFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryFormComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
