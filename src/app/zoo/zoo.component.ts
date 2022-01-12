import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddAnimal } from '../store/animal.actions';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.scss']
})
export class ZooComponent implements OnInit {
  // inputTest: string = "";
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  addAnimal(name: string) {
    // this.inputTest = name;
    this.store.dispatch(new AddAnimal(name));
  }

}
