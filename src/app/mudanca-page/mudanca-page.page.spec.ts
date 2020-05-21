import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MudancaPagePage } from './mudanca-page.page';

describe('MudancaPagePage', () => {
  let component: MudancaPagePage;
  let fixture: ComponentFixture<MudancaPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MudancaPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MudancaPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
