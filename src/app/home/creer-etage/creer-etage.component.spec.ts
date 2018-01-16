import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerEtageComponent } from './creer-etage.component';

describe('CreerEtageComponent', () => {
  let component: CreerEtageComponent;
  let fixture: ComponentFixture<CreerEtageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerEtageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerEtageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
