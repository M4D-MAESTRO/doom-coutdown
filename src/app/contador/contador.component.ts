import { Component, OnInit } from '@angular/core';
import { Subscription, Observable, interval } from 'rxjs';
import { reject } from 'q';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  lancamento = new Date(2020, 2, 20, 0, 0, 0, 0);
  hoje = new Date();
  diferencaMilli: number = 0;

  horaTemplate: any;
  dias: any;

  constructor() { }

  ngOnInit() {
    this.calculaData();
    setInterval(() => {
      this.calculaData();
    }, 1000);
  }

  calculaData() {
    this.hoje = new Date();
    this.diferencaMilli = this.lancamento.getTime() - this.hoje.getTime();
    const regex = new RegExp(/(\d\d\d\d)-(\d\d)-(\d\d)T(\d\d):(\d\d):(\d\d)/);
    this.horaTemplate = regex.exec(new Date(this.diferencaMilli).toISOString());
    this.getDiasConvertido();
  }

  getDiasConvertido() {
    let meses = Number((this.horaTemplate[2] - 1) * 30);
    let dias = Number(this.horaTemplate[3] - 1);
    this.dias = meses + dias;
  }

  getDiaDigito1() {
    return this.dias.toString()[0];
  }

  getDiaDigito2() {
    return this.dias.toString()[1];
  }

  getDiaDigito3() {
    return this.dias.toString()[2];
  }

  getHoraDigito1() {
    return this.horaTemplate[4][0];
  }

  getHoraDigito2() {
    return this.horaTemplate[4][1];
  }

  getMinutoDigito1() {
    return this.horaTemplate[5][0];
  }

  getMinutoDigito2() {
    return this.horaTemplate[5][1];
  }

  getSegundoDigito1() {
    return this.horaTemplate[6][0];
  }

  getSegundoDigito2() {
    return this.horaTemplate[6][1];
  }

  lancadoPorra() {

  }

}
