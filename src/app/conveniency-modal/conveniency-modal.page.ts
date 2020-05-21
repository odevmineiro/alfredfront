import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-conveniency-modal',
  templateUrl: './conveniency-modal.page.html',
  styleUrls: ['./conveniency-modal.page.scss'],
})
export class ConveniencyModalPage {

  constructor(private modal: ModalController) { }

  closeModal(){
    this.modal.dismiss();
  }

}
