import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseTournamentComponent } from './choose-tournament.component';

describe('ChooseTournamentComponent', () => {
  let component: ChooseTournamentComponent;
  let fixture: ComponentFixture<ChooseTournamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseTournamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
