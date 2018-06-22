import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'find-client',
  templateUrl: './find-client.component.html',
  styleUrls: ['./find-client.component.css']
})
export class FindClientComponent implements OnInit {
  testvar = 'simon test var in component finx-client';

  selectedClient: Client;

  onSelect(client: Client): void {
    this.selectedClient = client;
  }

  clients: Client[];

  constructor(private clientService: ClientService) { }

  getClients(): void {
    this.clients = this.clientService.getClients();
  }

  ngOnInit() {
    this.getClients();
  }

}
