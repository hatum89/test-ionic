import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegNumCelPage } from './reg-num-cel.page';

describe('RegNumCelPage', () => {
  let component: RegNumCelPage;
  let fixture: ComponentFixture<RegNumCelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegNumCelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegNumCelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
