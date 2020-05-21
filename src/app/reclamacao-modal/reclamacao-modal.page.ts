import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reclamacao-modal',
  templateUrl: './reclamacao-modal.page.html',
  styleUrls: ['./reclamacao-modal.page.scss'],
})
export class ReclamacaoModalPage  {

  constructor(private modal: ModalController) { }

  closeModal(){
    this.modal.dismiss();
  }

}
