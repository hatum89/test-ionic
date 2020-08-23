import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NumCelInnputPage } from './num-cel-innput.page';

describe('NumCelInnputPage', () => {
  let component: NumCelInnputPage;
  let fixture: ComponentFixture<NumCelInnputPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumCelInnputPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NumCelInnputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
