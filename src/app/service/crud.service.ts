import { Injectable } from '@angular/core';

//Se comunica con la API
import { HttpClient } from '@angular/common/http';

//Monitorea lo que sucede con la informacion
import { Observable, observable } from 'rxjs';

//Modelo de employee.ts
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  //Variable de URL de conexion
  API:String='http://localhost:86/empleados-main/';

  constructor( private clientHttp:HttpClient ) { }

  //Envia Datos Employee
  AddEmployee(datosEmpleado:Employee):Observable<any>{

    //Retorna el envio que se hace mediante POST
    return this.clientHttp.post(this.API+"?insertar=1",datosEmpleado);

  }
}
