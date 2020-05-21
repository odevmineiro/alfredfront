import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mudanca-page',
  templateUrl: './mudanca-page.page.html',
  styleUrls: ['./mudanca-page.page.scss'],
})
export class MudancaPagePage {

  constructor(private modal: ModalController) { }

  closeModal() {
    this.modal.dismiss();
  }

}
