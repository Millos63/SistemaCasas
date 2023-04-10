import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LandLordProperty } from 'src/app/models/LLP';
import { LlpService } from 'src/app/services/llp.service';

@Component({
  selector: 'app-llp-form',
  templateUrl: './llp-form.component.html',
  styleUrls: ['./llp-form.component.css']
})
export class LLPFormComponent {
  landLordProperty : LandLordProperty = {
    idLandLord:0,
    idProperty:0,
    isLandLord: false
  };

  selectedLandLordId: string = '';
  selectedPropertyId: string = '';
  constructor(private llpService: LlpService, private activatedRoute:ActivatedRoute){
    
  }
  ngOnInit():void{
    this.cargar();
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let idLandLord = e['idLandLord'];
        let idProperty = e['idProperty'];
        if(idLandLord & idProperty){
          this.llpService.getLandLordProperty(idLandLord, idProperty).subscribe(
            es=>this.landLordProperty=es,
            this.selectedLandLordId = idLandLord,
            this.selectedPropertyId = idProperty
          );
        }
      }
    )
  }
  
  update():void{
    this.llpService.updateLandLordProperty(this.selectedLandLordId,this.selectedPropertyId,this.landLordProperty).subscribe(
      res => {console.log(res)},
      err => console.error(err)
    );
  }

  saveNewLandLordProperty(){
    //console.log(this.student);
    this.llpService.saveLandLordProperty(this.landLordProperty).subscribe(
      res => {console.log(res)},
      err => console.error(err)
      
    );
  }
}
