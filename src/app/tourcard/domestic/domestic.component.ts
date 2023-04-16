import { Component } from '@angular/core';
import {TourDService} from '../../tour-d.service';
import {TourDStructure } from '../../../assets/data/tourDStructure';
import { Router } from '@angular/router';

@Component({
  selector: 'app-domestic',
  templateUrl: './domestic.component.html',
  styleUrls: ['./domestic.component.css']
})
export class DomesticComponent {
  Ddata:TourDStructure[] = [];
  constructor(private Ddatanew: TourDService,private routing:Router) {}
  ngOnInit(): void {
    this.Ddatanew.getTourDData().subscribe((data)=>{
      console.log(this.Ddata = data)
      
    })
    
  }
}
