import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';

//Importamos el servicio
import { CrudService } from 'src/app/service/CrudService';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  //Trae todos los datos del formulario
  formEmployees:FormGroup;

  constructor(

    public formulario:FormBuilder,
    //Se declara el servicio para utilizarlo
    private crudService:CrudService
    ){
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
    this.crudService.AddEmployee(this.formEmployees.value).subscribe();
  }

}
