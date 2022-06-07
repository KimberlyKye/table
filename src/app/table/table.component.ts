import { Component, OnInit } from '@angular/core';
import { Worker } from '../consts/worker';
import { WorkersService } from './workers.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  workers: Worker[] = [
    {
      id: 1,
      firstName: 'Anthony',
      lastName: 'Johns',
      salary: 15000,
      expierence: 1,
      position: 'Intern',
      departament: 'Information technology',
    },
    {
      id: 2,
      firstName: 'Kate',
      lastName: 'Kye',
      salary: 35000,
      expierence: 2,
      position: 'Office manager',
      departament: 'Information technology',
    },
    {
      id: 3,
      firstName: 'Helen',
      lastName: 'Tsoy',
      salary: 150000,
      expierence: 5,
      position: 'Middle full-stack developer',
      departament: 'Information technology',
    },
    {
      id: 4,
      firstName: 'Margharet',
      lastName: 'Elliot',
      salary: 300000,
      expierence: 7,
      position: 'Product owner',
      departament: 'Information technology',
    },
    {
      id: 5,
      firstName: 'Elle',
      lastName: 'Woods',
      salary: 70000,
      expierence: 3,
      position: 'QA engineer',
      departament: 'Information technology',
    },
    {
      id: 6,
      firstName: 'Harry',
      lastName: 'Anderson',
      salary: 60000,
      expierence: 2,
      position: 'Analyst',
      departament: 'Information technology',
    },
  ];
  constructor(public workersService: WorkersService) {}

  removeWorker(worker: Worker) {
    this.workers = this.workers.filter((el) => el.id !== worker.id);
    this.workersService.remove(worker);
  }

  salarySum(workers: Worker[]) {
    return workers.reduce((sum, el) => sum + el.salary, 0);
  }

  ngOnInit(): void {}
}
