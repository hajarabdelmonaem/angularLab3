import { Component, OnInit } from '@angular/core';
import {DeptServicesService} from '../../_sevices/dept-services.service';
import {Department} from '../../_models/department';
import { from } from 'rxjs';
@Component({
  selector: 'app-deparadd',
  templateUrl: './deparadd.component.html',
  styleUrls: ['./deparadd.component.css'],
  
})
export class DeparaddComponent implements OnInit {

  deptAdd:Department=new Department();
  constructor(public depAdd:DeptServicesService) { }

  
  onAdd()
  {
   return this.depAdd.addNewdept(this.deptAdd);
  }
 
  ngOnInit(): void {
  }

}
