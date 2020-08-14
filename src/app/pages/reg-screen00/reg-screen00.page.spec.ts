import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegScreen00Page } from './reg-screen00.page';

describe('RegScreen00Page', () => {
  let component: RegScreen00Page;
  let fixture: ComponentFixture<RegScreen00Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegScreen00Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegScreen00Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
