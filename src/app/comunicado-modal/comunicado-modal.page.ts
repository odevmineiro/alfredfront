import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-comunicado-modal',
  templateUrl: './comunicado-modal.page.html',
  styleUrls: ['./comunicado-modal.page.scss'],
})
export class ComunicadoModalPage {

  constructor(private modal: ModalController) { }

  closeModal(){
    this.modal.dismiss();
  }
  

}
