import { Injectable } from '@angular/core';
import {Department} from '../_models/department';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root',
})
export class DeptServicesService {

  
  private deptart:Department[]=[

    new Department(1,"accounting"),
    new Department(2,"management"),
    new Department(3,"financial"),
  ];

  Depeee : Department;

  getAllDepts(){

    return this.deptart;
  }

  addNewdept(dept:Department)
  {
    this.deptart.push(new Department(dept.id,dept.name)); 
    console.log(this.deptart);
  }

  getDeptById(id:Number){



     this.deptart.filter((element)=>{
      return element.id==id;
    });
    return null;
  
  }

  getUpdate(itemm){

    console.log("itemm",itemm);
    this.Depeee =itemm;
    console.log("depeee",this.Depeee);
    return this.Depeee;
  }




  constructor() { }

}
