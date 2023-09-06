import { Component } from '@angular/core';

export class Vehicle{
  make: string;
  model: string;
  year: number;
  color: string;
  vin: number;

  constructor(){
    this.make = '';
    this.model = '';
    this.year = 0;
    this.color = '';
    this.vin = 0;
  }
}

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent {
  
  vehicle: any = {};
}
