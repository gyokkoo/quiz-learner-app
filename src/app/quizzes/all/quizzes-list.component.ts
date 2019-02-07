import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './quizzes-list.component.html',
  styleUrls: ['./quizzes-list.component.scss']
})
export class QuizzesListComponent implements OnInit {

  quizzes = [
    {
      title: 'USI test',
      description: 'test po usi',
      creator: 'ivancho_1998'
    },
    {
      title: 'SDA test',
      description: 'test po SDA',
      creator: 'Pesho'
    },
    {
      title: 'JS test',
      description: 'test po JS',
      creator: 'George'
    },
  ];

  listFilter = '';

  constructor() { }

  ngOnInit() {
  }

}
