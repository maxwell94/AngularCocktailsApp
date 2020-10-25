import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../../shared/cocktail.model';

@Component({
  selector: 'app-coktails-details',
  templateUrl: './coktails-details.component.html',
  styleUrls: ['./coktails-details.component.css'],
})
export class CoktailsDetailsComponent implements OnInit {
  cocktail: Cocktail;

  constructor() {
    this.cocktail = new Cocktail(
      'Sex on the beach',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, laudantium',
      'https://images.unsplash.com/photo-1596463989140-3b600dab72e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    );
  }

  ngOnInit(): void {}
}
