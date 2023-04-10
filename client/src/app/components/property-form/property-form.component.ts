import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/models/Property';
import { PropertyService } from 'src/app/services/property.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.css']
})
export class PropertyFormComponent implements OnInit{
  property: Property = {
    idProperty: 0,
    propertyType: "",
    streetAddress: "",
    city: "",
    stateProvince: "",
    zipCode:"",
    price: 0,
    numBedrooms: 0,
    numBathrooms: 0, 
    landMeters: 0,
    constructionMeters: 0,
    photo: "",
    garageSize: 0,
    sisternSize: 0,
    bonus: ""
  }
  
  selectedId: string = '';

  ngOnInit(): void {
    this.cargar();
  }
  constructor(private propertyService: PropertyService, private activatedRoute:ActivatedRoute){

  }


  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id = e['idProperty'];
        if(id){
          this.propertyService.get(id).subscribe(
            es=>this.property=es,
            this.selectedId = id
          );
        }
      }
    )
  }

  update():void{
    this.propertyService.update(this.selectedId,this.property).subscribe(
      res => {console.log(res)},
      err => console.error(err)
    );
  }

  saveNewProperty(){
    delete this.property.idProperty;
    
    this.propertyService.save(this.property).subscribe(
      res =>{console.log(res)},
      err => console.error(err)
    );
  }
}
