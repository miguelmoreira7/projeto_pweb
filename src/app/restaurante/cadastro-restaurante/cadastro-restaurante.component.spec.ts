import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroRestauranteComponent } from './cadastro-restaurante.component';

describe('CadastroRestauranteComponent', () => {
  let component: CadastroRestauranteComponent;
  let fixture: ComponentFixture<CadastroRestauranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroRestauranteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
