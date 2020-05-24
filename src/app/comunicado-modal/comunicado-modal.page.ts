import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-comunicado-modal',
  templateUrl: './comunicado-modal.page.html',
  styleUrls: ['./comunicado-modal.page.scss'],
})
export class ComunicadoModalPage {

  constructor(private modal: ModalController, private datePicker: DatePicker, private datePipe: DatePipe) { }

  closeModal(){
    this.modal.dismiss();
  }


  createPicker() {
    const options = {
      date: new Date('12/11/1994'),
      mode: 'date',
      // minDate: date.getFullYear().toLocaleString()+'-'+(date.getMonth().toLocaleString()+1)+'-'+date.getDate().toLocaleString(),
      allowOldDates: false,
      locale: 'pt-BR',
      titleText: 'Selecione a Data',
      todayText: 'Selecione a Data de Hoje',
      okText: 'Selecionar',
      cancelText: 'Cancelar',
      doneButtonLabel: 'Selecionar',
      doneButtonColor: '#686de0',
      cancelButtonLabel: 'Cancelar',
      cancelButtonColor: '#686de0',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT,
    }
    this.datePicker.show(options).then(date => console.log('pegou a data orra:', date.toLocaleString('pt-BR')), err => console.log(err,))

  }
}