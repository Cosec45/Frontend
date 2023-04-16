import { Component } from '@angular/core';
import {TourDService} from '../../tour-d.service';
import {TourDStructure } from '../../../assets/data/tourDStructure';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-domestic-id',
  templateUrl: './domestic-id.component.html',
  styleUrls: ['./domestic-id.component.css']
})
export class DomesticIDComponent {
  id = '';
  Ddata: TourDStructure = {};
  constructor(private datanew: TourDService,private routedata:ActivatedRoute,private route:Router) {}

  ngOnInit(): void {
    this.id  = this.routedata.snapshot.paramMap.get('id')|| '-1'
    console.log(this.id);
    console.log('/'+this.id);
    this.datanew.getTourDataById(this.id).subscribe((data)=>{
      this.Ddata = data
      console.log(this.Ddata)
      
    })
  }

}
