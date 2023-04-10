import { Component, OnInit } from '@angular/core';
import { LandLord } from 'src/app/models/LandLord';
import { LandLordService } from 'src/app/services/land-lord.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-land-lord-form',
  templateUrl: './land-lord-form.component.html',
  styleUrls: ['./land-lord-form.component.css']
})
export class LandLordFormComponent implements OnInit {
  landLord: LandLord = {
    idLandLord: 0,
    firstName : "",
    lastName: "",
    email: "",
    phoneNumber: ""
  };

  selectedId: string = '';

  ngOnInit(): void {
    this.cargar();
  }
  constructor(private landLordService: LandLordService,private activatedRoute:ActivatedRoute){

  }


  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id = e['idLandLord'];
        if(id){
          this.landLordService.getLandLord(id).subscribe(
            es=>this.landLord=es,
            this.selectedId = id
          );
        }
      }
    )
  }
  update():void{
    this.landLordService.updateLandlord(this.selectedId,this.landLord).subscribe(
      res => {console.log(res)},
      err => console.error(err)
    );
  }

  saveNewLandLord(){
    delete this.landLord.idLandLord;
    
    this.landLordService.saveLandLord(this.landLord).subscribe(
      res =>{console.log(res)},
      err => console.error(err)
    );
  }
}
