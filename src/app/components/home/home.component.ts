import { Component } from '@angular/core';

interface User {
  position: number;
  name: string;
  score: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  users: User[] = [
    {
      position: 1,
      name: 'Felipe',
      score: 100
    },
    {
      position: 2,
      name: 'Marcia',
      score: 80
    },
    {
      position: 3,
      name: 'Rafael',
      score: 78
    },
    {
      position: 4,
      name: 'Sarah',
      score: 44
    },
  ];
}
