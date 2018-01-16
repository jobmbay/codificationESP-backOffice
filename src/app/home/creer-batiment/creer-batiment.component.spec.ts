import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerBatimentComponent } from './creer-batiment.component';

describe('CreerBatimentComponent', () => {
  let component: CreerBatimentComponent;
  let fixture: ComponentFixture<CreerBatimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerBatimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerBatimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
