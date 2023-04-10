import { Component, OnInit, HostBinding} from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit  {

  @HostBinding('class') classes = 'row';
  properties: any = [];

  constructor (private propertyService: PropertyService, private router:Router, private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.propertyService.getAll().subscribe(
      res => this.properties = res,
      err => console.error(err)
    );
  }

  delete(id:string){
    this.propertyService.delete(id).subscribe(
      res => {
        console.log(res);
        this.ngOnInit();
      },
      err => console.error(err)
    );
  }
}
