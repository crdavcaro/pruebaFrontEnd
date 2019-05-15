import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: []
})
export class PersonComponent implements OnInit {

  person: any = {};
  constructor(private personService: PersonService, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(params => {
      this.personService.getPeople(params.id)
    .subscribe((data: any) => {
      this.person = data;
    }, ((errorMsg) => {
    }));
    });
  }

  ngOnInit() {
  }

}
