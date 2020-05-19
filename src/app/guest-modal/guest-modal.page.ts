import { Component } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import QRCode from 'qrcode';


@Component({
  selector: 'app-guest-modal',
  templateUrl: './guest-modal.page.html',
  styleUrls: ['./guest-modal.page.scss'],
})
export class GuestModalPage {
  constructor(private modal: ModalController, private base64ToGallery: Base64ToGallery, private toast: ToastController) { }
  
  closeModal() {
    this.modal.dismiss();
  }

  downloadQR() {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    const image = canvas.toDataURL('image/jpeg').toString();
    let data = image.split(',')[1];

    this.base64ToGallery.base64ToGallery(data, {prefix: '_img', mediaScanner: true}).then(async res => {
      let toast = await this.toast.create({header: 'QRCode salvo em sua galeria, compartilhe com seu convidado.'});
      toast.present();
    }, err => console.log(err))
  }



  code = JSON.stringify({
    name: 'Cainã',
    idade: 22,
    cpf: '424.223.578.06'
  });
  
  generated = '';

  displayQrCode() {
    return this.generated !== '';
  }


  process() {
    const qrcode = QRCode;
    const self = this;
    qrcode.toDataURL(self.code, { errorCorrectionLevel: 'H' }, function (err, url) {
      self.generated = url;
    })
  }

}
