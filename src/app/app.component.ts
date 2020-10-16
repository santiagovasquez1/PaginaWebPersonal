import { HistoriaControllerService } from './Service/historia-controller.service';
import { Santiago } from './Model/santiago';
import { DataSantiagoService } from './Service/data-santiago.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebPersonal';
  santiago: Santiago;
  widthPage: number;
  isDesktopDevice: boolean;

  constructor(public data: DataSantiagoService, private historiaController: HistoriaControllerService) {
    this.santiago = data.santiago;
    this.historiaController.detectDevice();
    this.isDesktopDevice = this.historiaController.isDesktopDevice;
    this.historiaController.isDesktopDevice$.emit(this.isDesktopDevice);
  }

  onResize(event) {
    this.widthPage = document.getElementById('ventanaPrincipal').clientWidth;
    this.historiaController.resize$.emit(this.widthPage);
  }


  private onMobileLoad() {

    if (this.isDesktopDevice === false) {

    }

  }

}
