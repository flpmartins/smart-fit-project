import { Component, Input, OnInit } from '@angular/core';
import { Location } from '../../types/location.interface';

@Component({
  selector: 'app-card-lists',
  templateUrl: './card-lists.component.html',
  styleUrl: './card-lists.component.scss'
})
export class CardListsComponent implements OnInit {

  @Input() unitsList: Location[] = []


  constructor() { }

  ngOnInit(): void {
  }
}
