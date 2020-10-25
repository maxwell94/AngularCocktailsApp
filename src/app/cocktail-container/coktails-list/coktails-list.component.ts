import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../../shared/cocktail.model';

@Component({
  selector: 'app-coktails-list',
  templateUrl: './coktails-list.component.html',
  styleUrls: ['./coktails-list.component.css'],
})
export class CoktailsListComponent implements OnInit {
  cocktails: Cocktail[] = [
    {
      name: 'Mojito',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, laudantium.',
      img:
        'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    },
    {
      name: 'Sex on the beach',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, laudantium.',
      img:
        'https://images.unsplash.com/photo-1596463989140-3b600dab72e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    },
    {
      name: 'Capiroska',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, laudantium.',
      img:
        'https://images.unsplash.com/photo-1545438102-799c3991ffb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    },
    {
      name: 'Vodka',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, laudantium.',
      img:
        'https://images.unsplash.com/photo-1542849187-5ec6ea5e6a27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1047&q=80',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
