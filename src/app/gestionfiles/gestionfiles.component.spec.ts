import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionfilesComponent } from './gestionfiles.component';

describe('GestionfilesComponent', () => {
  let component: GestionfilesComponent;
  let fixture: ComponentFixture<GestionfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionfilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
