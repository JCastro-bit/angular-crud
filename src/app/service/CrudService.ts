import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})

export class CrudService {

  //Variable de URL de conexion
  API: String = 'http://localhost:86/empleados-main/';

  constructor(private clientHttp: HttpClient) { }

  //Envia Datos Employee
  AddEmployee(datosEmpleado: Employee): Observable<any> {

    //Retorna el envio que se hace mediante POST
    return this.clientHttp.post(this.API + "?insertar=1", datosEmpleado);

  }
}
