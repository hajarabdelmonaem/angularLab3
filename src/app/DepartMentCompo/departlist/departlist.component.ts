import { Component, OnInit } from '@angular/core';
import {DeptServicesService} from '../../_sevices/dept-services.service';
import {Department} from '../../_models/department';
import { from } from 'rxjs';

@Component({
  selector: 'app-departlist',
  templateUrl: './departlist.component.html',
  styleUrls: ['./departlist.component.css']
})
export class DepartlistComponent implements OnInit {

  component:Number=0;
  depts:Department=new Department();
 
  constructor(public Depy_service:DeptServicesService) { }

  deptList:Department[]=[];

  ngOnInit(): void {
    this.deptList=this.Depy_service.getAllDepts();
  }


  onDelete(i)
  {  
    this.deptList.splice(i,1);
  }

  showUpdate(item){
    this.component=1;
    
    this.Depy_service.getUpdate(item);
  }
 
 
}
