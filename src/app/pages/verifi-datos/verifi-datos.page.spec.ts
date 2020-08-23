import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifiDatosPage } from './verifi-datos.page';

describe('VerifiDatosPage', () => {
  let component: VerifiDatosPage;
  let fixture: ComponentFixture<VerifiDatosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifiDatosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifiDatosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
