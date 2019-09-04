import { Component, OnInit } from '@angular/core';
import { NewDisplaySerService } from '../services/new-display-ser.service';
@Component({
  selector: 'app-testing-display-serv',
  templateUrl: './testing-display-serv.component.html',
  styleUrls: ['./testing-display-serv.component.css'],
  providers: [NewDisplaySerService]
})
export class TestingDisplayServComponent implements OnInit {
  constructor(private newservice: NewDisplaySerService) {}
  displayText = '';
  ngOnInit() {
    this.displayText = this.newservice.display();
  }
}
