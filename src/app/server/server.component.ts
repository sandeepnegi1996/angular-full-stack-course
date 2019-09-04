import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html"
})
export class ServerComponent {
  serverid = 11;
  serverStatus = "online";

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
  }
  getServerStatus() {
    return this.serverStatus;
  }
}
