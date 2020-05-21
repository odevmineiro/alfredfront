import { ReclamacaoModalPage } from './../reclamacao-modal/reclamacao-modal.page';
import { ComunicadoModalPage } from '../comunicado-modal/comunicado-modal.page';
import { ConveniencyModalPage } from './../conveniency-modal/conveniency-modal.page';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GuestModalPage } from '../guest-modal/guest-modal.page';
import { MudancaPagePage } from '../mudanca-page/mudanca-page.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {

  constructor(private modal: ModalController) { }

  async openGuestModal () {
    const modal = await this.modal.create({
      component: GuestModalPage
    });

    await modal.present();
  }

  async openConvenienyModal () {
    const modal = await this.modal.create({
      component: ConveniencyModalPage
    });

    await modal.present();
  }

  async openMudancaModal () {
    const modal = await this.modal.create({
      component: MudancaPagePage
    });
    await modal.present();
  }

  async openComunicadoModal () {
    const modal = await this.modal.create({
      component: ComunicadoModalPage
    });
    await modal.present();
  }

  async openReclamacaoModal () {
    const modal = await this.modal.create({
      component: ReclamacaoModalPage
    });
    await modal.present();
  }

  async openEntregaModal () {
    const modal = await this.modal.create({
      component: ReclamacaoModalPage
    });
    await modal.present();
  }

}
