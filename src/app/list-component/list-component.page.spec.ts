import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListComponentPage } from './list-component.page';

describe('ListComponentPage', () => {
  let component: ListComponentPage;
  let fixture: ComponentFixture<ListComponentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
