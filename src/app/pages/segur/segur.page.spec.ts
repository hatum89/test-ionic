import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SegurPage } from './segur.page';

describe('SegurPage', () => {
  let component: SegurPage;
  let fixture: ComponentFixture<SegurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SegurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
