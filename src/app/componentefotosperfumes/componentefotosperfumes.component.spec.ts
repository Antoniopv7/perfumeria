import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentefotosperfumesComponent } from './componentefotosperfumes.component';

describe('ComponentefotosperfumesComponent', () => {
  let component: ComponentefotosperfumesComponent;
  let fixture: ComponentFixture<ComponentefotosperfumesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentefotosperfumesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentefotosperfumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
