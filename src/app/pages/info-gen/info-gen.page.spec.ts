import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoGenPage } from './info-gen.page';

describe('InfoGenPage', () => {
  let component: InfoGenPage;
  let fixture: ComponentFixture<InfoGenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoGenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoGenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
