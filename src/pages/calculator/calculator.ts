import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})
export class CalculatorPage {
  height: number;
  weight: number;
  heightMsrmt: string;
  weightMrsmt: string;
  metricToggle: boolean;
  imperialToggle: boolean;

  bmiValue: number;
  bmiMessage: string;

  calculateBMI() {
  if (this.weight > 0 && this.height > 0) {
    if (this.metricToggle == true) {
      let finalBmi = this.weight / (this.height / 100 * this.height / 100); this.bmiValue = parseFloat(finalBmi.toFixed(2)); this.setBMIMessage();
        let heightM = 'cm';
          let weightM = 'kg';
    } else {
      let finalBmi = this.weight * 703 / (this.height * this.height); this.bmiValue = parseFloat(finalBmi.toFixed(2)); this.setBMIMessage();
        let heightM = 'in';
          let weightM = 'lbs';
    }
  } }
  //
  // setHeightMsrmnt() {
  //   if (this.metricToggle == true) {
  //     let heightMsrmt = 'cm'
  //   } else { (this.imperialToggle == true)
  //     let heightMsrmt = 'in'
  //   }
  // }
  //
  // setWeightMsrmt() {
  //   if (this.metricToggle == true) {
  //     let weightMrsmt = 'kg'
  //   } else { (this.imperialToggle == true)
  //     let weightMrsmt = 'lbs'
  //   }
  // }

  private setBMIMessage() {
  if (this.bmiValue < 18.5) {
  this.bmiMessage = "Underweight" }
  if (this.bmiValue > 18.5 && this.bmiValue < 25) { this.bmiMessage = "Normal"
  }
  if (this.bmiValue > 25 && this.bmiValue < 30) { this.bmiMessage = "Overweight"
  }
  if (this.bmiValue > 30) { this.bmiMessage = "Obese"
  }
}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
  }
}
