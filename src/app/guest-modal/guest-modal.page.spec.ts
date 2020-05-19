import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuestModalPage } from './guest-modal.page';

describe('GuestModalPage', () => {
  let component: GuestModalPage;
  let fixture: ComponentFixture<GuestModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuestModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
