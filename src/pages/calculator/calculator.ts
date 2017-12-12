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
  heightM: string;
  weightM: string;
  metricToggle: boolean;
  imperialToggle: boolean;
  bmiValue: number;
  bmiMessage: string;

  calculateBMI() {
  if (this.weight > 0 && this.height > 0) {
    if (this.metricToggle == true) {
      let finalBmi = this.weight / (this.height / 100 * this.height / 100);
      this.bmiValue = parseFloat(finalBmi.toFixed(2));
      this.setBMIMessage();
      this.heightM = 'cm';
      this.weightM = 'kg';
    } else {
      let finalBmi = this.weight * 703 / (this.height * this.height);
      this.bmiValue = parseFloat(finalBmi.toFixed(2));
      this.setBMIMessage();
      this.heightM = 'in';
      this.weightM = 'lbs';
    }
  } }

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

  private changeUnits(unit) {
    if (unit == true && this.metricToggle == true ) {
      this.weightM = 'kg';
      this.heightM = 'cm';
      this.imperialToggle = false;
    } else if (unit == true && this.metricToggle == false ) {
      this.weightM = 'lbs';
      this.heightM = 'in';
      this.imperialToggle = true;
    } else if (unit == false && this.imperialToggle == false ) {
      this.weightM = 'kg';
      this.heightM = 'cm';
      this.metricToggle = true;
    } else if (unit == false && this.imperialToggle == true ) {
      this.weightM = 'lbs';
      this.heightM = 'in';
      this.metricToggle = false;
    }
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.metricToggle = true;
  this.heightM = 'cm';
  this.weightM = 'kg';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
  }
}
