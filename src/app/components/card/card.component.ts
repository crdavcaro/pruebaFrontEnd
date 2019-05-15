import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: []
})
export class CardComponent implements OnInit {

  @Input() person: any = {};
  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewPerson() {
     this.router.navigate(['/person', this.person.id]);
  }
}
