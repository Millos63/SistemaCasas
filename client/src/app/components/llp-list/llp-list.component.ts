import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LlpService } from 'src/app/services/llp.service';
import { LandLordProperty } from 'src/app/models/LLP';


@Component({
  selector: 'app-llp-list',
  templateUrl: './llp-list.component.html',
  styleUrls: ['./llp-list.component.css']
})
export class LlpListComponent {
  @HostBinding('class') classes = 'row';
  LandLordsProperties:any = [];

  constructor(private llpService: LlpService, private router:Router, private activatedRoute:ActivatedRoute){}
  
  ngOnInit(): void {
    this.llpService.getLandLordsProperties().subscribe(
      res => this.LandLordsProperties = res,
      err => console.error(err)
    );
  }

  delete(idLandLord:string, idProperty:string){
    this.llpService.deleteLandLordProperty(idLandLord, idProperty).subscribe(
      res => {
        console.log(res);
        this.ngOnInit();
      },
      err => console.error(err)
    );
  }
}
