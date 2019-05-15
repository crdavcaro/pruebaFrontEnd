import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  persons: any[] = [];

  constructor(private personService: PersonService) {
    this.personService.getPeople('')
    .subscribe((data: any) => {
      this.persons = data;
    }, ((errorMsg) => {
    }));
  }

  ngOnInit() {
  }

}
