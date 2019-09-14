import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  addNewServers = false;
  serverCreationStatus = 'no server is created yet';

  serverName = 'this is server name';
  serverCreated = false;

  serverArray = ['test1', 'test2'];
  constructor() {
    setInterval(() => {
      this.addNewServers = true;
    }, 2000);
  }

  onServerCreation() {
    this.serverCreationStatus =
      'server is created now and the name is ' + this.serverName;
    this.serverCreated = true;
    this.serverArray.push(this.serverName);
  }

  onUpdateServerName(event: any) {
    //
    this.serverName = event.target.value;
    //console.log(event);
  }

  ngOnInit() {}
}
