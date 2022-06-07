import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Worker } from '../consts/worker';

@Injectable({ providedIn: 'root' })
export class WorkersService {
  static url = 'https://';
  constructor(private http: HttpClient) {}

  remove(worker: Worker): Observable<void> {
    return this.http.delete<void>(
      `${WorkersService.url}/${worker.departament}/${worker.id}.json` //Предположим, что все сотрудники в базе размещаются по папкам с отделами и в базе всё хранится в json-формате
    );
  }
}
