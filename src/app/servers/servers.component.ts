import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  addNewServers = true;
  constructor() {
    // setInterval(() => {
    //   this.addNewServers = false;
    // }, 3000);
  }

  ngOnInit() {}
}
