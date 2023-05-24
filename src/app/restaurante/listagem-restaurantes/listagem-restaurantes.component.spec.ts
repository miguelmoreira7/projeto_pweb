import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemRestaurantesComponent } from './listagem-restaurantes.component';

describe('ListagemRestaurantesComponent', () => {
  let component: ListagemRestaurantesComponent;
  let fixture: ComponentFixture<ListagemRestaurantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemRestaurantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemRestaurantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
