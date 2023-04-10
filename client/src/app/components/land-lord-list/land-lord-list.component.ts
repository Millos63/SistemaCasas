import { Component, OnInit, HostBinding} from '@angular/core';
import { LandLordService } from 'src/app/services/land-lord.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-land-lord-list',
  templateUrl: './land-lord-list.component.html',
  styleUrls: ['./land-lord-list.component.css']
})
export class LandLordListComponent implements OnInit{
  @HostBinding('class') classes = 'row';
  landLords: any = [];

  constructor (private landLordService: LandLordService, private router:Router, private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.landLordService.getLandLords().subscribe(
      res => this.landLords = res,
      err => console.error(err)
    );
  }

  delete(id:string){
    this.landLordService.deleteLandLord(id).subscribe(
      res => {
        console.log(res);
        this.ngOnInit();
      },
      err => console.error(err)
    );
  }
  


}
