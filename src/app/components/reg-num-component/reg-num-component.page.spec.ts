import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegNumComponentPage } from './reg-num-component.page';

describe('RegNumComponentPage', () => {
  let component: RegNumComponentPage;
  let fixture: ComponentFixture<RegNumComponentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegNumComponentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegNumComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
