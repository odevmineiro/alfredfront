import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntregaModalPage } from './entrega-modal.page';

describe('EntregaModalPage', () => {
  let component: EntregaModalPage;
  let fixture: ComponentFixture<EntregaModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntregaModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntregaModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
