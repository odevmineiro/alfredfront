import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserDataModalPage } from './user-data-modal.page';

describe('UserDataModalPage', () => {
  let component: UserDataModalPage;
  let fixture: ComponentFixture<UserDataModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDataModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserDataModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
