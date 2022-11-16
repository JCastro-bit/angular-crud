import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { CrudService }

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  //Trae todos los datos del formulario
  formEmployees:FormGroup;

  constructor( public formulario:FormBuilder) {
    //Recepciona los datos del formulario
    this.formEmployees=this.formulario.group({
      name:[''],
      email:['']
    })
  }

  ngOnInit(): void {
  }

  sendData(): any {
    console.log(this.formEmployees.value);
  }

}
