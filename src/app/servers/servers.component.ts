import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  addNewServers = false;
  serverCreationStatus = "no server is created yet";

  serverName = "";

  constructor() {
    setInterval(() => {
      this.addNewServers = true;
    }, 2000);
  }

  onServerCreation() {
    this.serverCreationStatus = "server is created now ";
  }

  onUpdateServerName(event: any) {
    //
    this.serverName = event.target.value;
    //console.log(event);
  }

  ngOnInit() {}
}
