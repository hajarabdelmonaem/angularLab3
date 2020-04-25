import { Component, OnInit } from '@angular/core';
import {DeptServicesService} from '../../_sevices/dept-services.service';
import {DepartlistComponent} from '../departlist/departlist.component';
import {Department} from '../../_models/department';


@Component({
  selector: 'app-departupdate',
  templateUrl: './departupdate.component.html',
  styleUrls: ['./departupdate.component.css']
})
export class DepartupdateComponent implements OnInit {

 
  constructor(public depttt:DeptServicesService) { }


  ngOnInit(): void {
  }




}
