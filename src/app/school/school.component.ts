import { Component } from '@angular/core';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styles: [
    `
      .aberta {
        color: white;
      }
    `,
  ],
})
export class schoolComponent {
  schoolId = 10;
  schoolName = 'Escola Fundamental Brasil';
  schoolSituation = 'aberta';

  constructor() {
    this.schoolSituation = Math.random() > 0.5 ? 'aberta' : 'fechada';
  }

  getSchoolName() {
    return this.schoolName;
  }

  getStatusColor() {
    return this.schoolSituation === 'aberta' ? 'green' : 'red';
  }

  ngOnInit(): void {}
}
