import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pet } from './models/pet.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'exe06';
  serviceUrl = 'https://petstore.swagger.io/v2/pet';
  pets: Pet[];
  selectedPet: Pet;
  isLoading = true;
  constructor(public httpClient: HttpClient) { }
  ngOnInit(): void {
    this.getPets().subscribe(res=> { this.pets = res as Pet[]; this.isLoading = false; });
  }
  getPets() {
    return this.httpClient.get<Array<Pet>>(`${this.serviceUrl}/findByStatus?status=sold`);
  }
  selectPet(pet: Pet) {
    this.selectedPet = pet;
  }
}
