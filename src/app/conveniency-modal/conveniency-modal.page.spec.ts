import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConveniencyModalPage } from './conveniency-modal.page';

describe('ConveniencyModalPage', () => {
  let component: ConveniencyModalPage;
  let fixture: ComponentFixture<ConveniencyModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConveniencyModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConveniencyModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
