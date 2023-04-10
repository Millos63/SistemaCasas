import { Component, OnInit, HostBinding} from '@angular/core';
import { AdvisorService } from 'src/app/services/advisor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-advisor-list',
  templateUrl: './advisor-list.component.html',
  styleUrls: ['./advisor-list.component.css']
})
export class AdvisorListComponent {
  @HostBinding('class') classes = 'row';
  advisors: any = [];

  constructor (private advisorService: AdvisorService, private router:Router, private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.advisorService.getAll().subscribe(
      res => this.advisors = res,
      err => console.error(err)
    );
  }

  delete(id:string){
    this.advisorService.delete(id).subscribe(
      res => {
        console.log(res);
        this.ngOnInit();
      },
      err => console.error(err)
    );
  }
}

