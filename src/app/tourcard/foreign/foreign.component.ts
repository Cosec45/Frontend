import { Component } from '@angular/core';
import {TourFService} from '../../tour-f.service';
import {TourFStructure } from '../../../assets/data/tourFStructure';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foreign',
  templateUrl: './foreign.component.html',
  styleUrls: ['./foreign.component.css']
})
export class ForeignComponent {
  Fdata:TourFStructure[] = [];
  constructor(private Ddatanew: TourFService,private routing:Router) {}
  ngOnInit(): void {
    this.Ddatanew.getTourFsData().subscribe((data)=>{
      console.log(this.Fdata = data)
      
    })
    
  }
}
