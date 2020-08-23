import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TemiCondiPage } from './temi-condi.page';

describe('TemiCondiPage', () => {
  let component: TemiCondiPage;
  let fixture: ComponentFixture<TemiCondiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemiCondiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TemiCondiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
