import { Component } from '@angular/core';
import { Doctor } from './doctor/doctor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'doctors';
  doctors: Doctor[] = [];
  filteredDoctors: Doctor[] = [];

  filterSpecialty: string = "Any";
  filterLocation: string = "Any";
  filterRating: number = 0;

  specialties: string[] = ["Any", "Allergist", "Dermatologist", "Internist", "OB-GYN", "Primary Care"]
  locations: string[] = ["Any", "Chapel Hill, NC", "Fayetteville, NC", "Greensboro, NC", "Pittsboro, NC", "Raleigh, NC"]


  ngOnInit() {
    // Demo data
    var d: Doctor = new Doctor();
    d.name = "Dawn Kleinman";
    d.specialty = "Dermatologist";
    d.location = "Pittsboro, NC"
    d.rating = 4.81;
    d.imageUrl = d.imageUrlHead + d.name + ".png";
    d.address = "959 E St, Ste B, Pittsboro, NC 27312"
    this.doctors.push(d);

    d = new Doctor();
    d.name = "Betti Reese";
    d.specialty = "Primary Care";
    d.location = "Greensboro, NC"
    d.rating = 4.69;
    d.imageUrl = d.imageUrlHead + d.name + ".png";
    d.address = "2515 Oakcrest Ave, Greensboro, NC 27408";
    this.doctors.push(d);

    d = new Doctor();
    d.name = "Robert Johnson";
    d.specialty = "Dermatologist";
    d.location = "Raleigh, NC"
    d.rating = 4.81;
    d.imageUrl = d.imageUrlHead + d.name + ".png";
    d.address = "3809 Computer Dr, Ste 200, Raleigh, NC 27609";
    this.doctors.push(d);

    d = new Doctor();
    d.name = "Richard Guillot";
    d.specialty = "Allergist";
    d.location = "Greensboro, NC"
    d.rating = 4.86;
    d.imageUrl = d.imageUrlHead + d.name + ".png";
    d.address = "3801 W Market St, Greensboro, NC 27407";
    this.doctors.push(d);

    d = new Doctor();
    d.name = "Haku Kahaono";
    d.specialty = "Internist";
    d.location = "Greensboro, NC"
    d.rating = 4.09;
    d.imageUrl = d.imageUrlHead + d.name + ".png";
    d.address = "3402 Battleground Ave, Greensboro, NC 27410";
    this.doctors.push(d);

    d = new Doctor();
    d.name = "Nitin Desai";
    d.specialty = "Internist";
    d.location = "Fayetteville, NC"
    d.rating = 4.24;
    d.imageUrl = d.imageUrlHead + d.name + ".png";
    d.address = "1309 Medical Dr, Fayetteville, NC 28304";
    this.doctors.push(d);

    d = new Doctor();
    d.name = "Yun Sun";
    d.specialty = "Internist";
    d.location = "Greensboro, NC"
    d.rating = 4.43;
    d.imageUrl = d.imageUrlHead + d.name + ".png";
    d.address = "3402 Battleground Ave, Greensboro, NC 27410";
    this.doctors.push(d);

    d = new Doctor();
    d.name = "Robert Foster";
    d.specialty = "Primary Care";
    d.location = "Greensboro, NC"
    d.rating = 4.70;
    d.imageUrl = d.imageUrlHead + d.name + ".png";
    d.address = "3801 W Market St, Greensboro, NC 27407";
    this.doctors.push(d);

    d = new Doctor();
    d.name = "Joshua Hardison";
    d.specialty = "OB-GYN";
    d.location = "Chapel Hill, NC"
    d.rating = 4.97;
    d.imageUrl = d.imageUrlHead + d.name + ".png";
    d.address = "120 Conner Drive, Suite 101, Chapel Hill, NC 27514";
    this.doctors.push(d);

    d = new Doctor();
    d.name = "Ema Kulwa";
    d.specialty = "OB-GYN";
    d.location = "Greensboro, NC"
    d.rating = 4.72;
    d.imageUrl = d.imageUrlHead + d.name + ".png";
    d.address = "3200 N line Ave, # 130, Greensboro, NC 27408";
    this.doctors.push(d);

    d = new Doctor();
    d.name = "Naima Dillard";
    d.specialty = "OB-GYN";
    d.location = "Greensboro, NC"
    d.rating = 5.00;
    d.imageUrl = d.imageUrlHead + d.name + ".png";
    d.address = "3200 N line Ave, # 130, Greensboro, NC 27408";
    this.doctors.push(d);

    d = new Doctor();
    d.name = "Angela Roberts";
    d.specialty = "OB-GYN";
    d.location = "Greensboro, NC"
    d.rating = 5.00;
    d.imageUrl = d.imageUrlHead + d.name + ".png";
    d.address = "3200 N line Ave, # 130, Greensboro, NC 27408";
    this.doctors.push(d);

    d = new Doctor();
    d.name = "Walda Pinn";
    d.specialty = "OB-GYN";
    d.location = "Greensboro, NC"
    d.rating = 5.00;
    d.imageUrl = d.imageUrlHead + d.name + ".png";
    d.address = "3200 N line Ave, # 130, Greensboro, NC 27408";
    this.doctors.push(d);

    d = new Doctor();
    d.name = "Mohamad Shakir";
    d.specialty = "Primary Care";
    d.location = "Fayetteville, NC"
    d.rating = 4.57;
    d.imageUrl = d.imageUrlHead + d.name + ".png";
    d.address = "4250 Clinton Road, Suite 101, Fayetteville, NC";
    this.doctors.push(d);

    for (var i = 0; i < this.doctors.length; i++) {
      this.filteredDoctors.push(this.doctors[i]);
    }
    this.filteredDoctors.sort((a, b) => a.rating < b.rating ? 1 : a.rating > b.rating ? -1 : 0)
  }

  applyFilter() {
    this.filteredDoctors = [];
    for (var i = 0; i < this.doctors.length; i++) {
      // Check each doctor against the filters before adding them to the page
      if ((this.filterSpecialty === "Any" || this.doctors[i].specialty === this.filterSpecialty) &&
          (this.filterLocation === "Any" || this.doctors[i].location === this.filterLocation) &&
          (this.doctors[i].rating >= this.filterRating)) {
        this.doctors[i].displayedAddress = "";
        this.filteredDoctors.push(this.doctors[i]);
      }
    }
    this.filteredDoctors.sort((a, b) => a.rating < b.rating ? 1 : a.rating > b.rating ? -1 : 0)
  }

  showSimilar(doc: Doctor) {
    this.filteredDoctors = [];
    for (var i = 0; i < this.doctors.length; i++) {
      // Check each doctor against the filters before adding them to the page
      if (this.doctors[i].specialty === doc.specialty || this.doctors[i].location === doc.location) {
        this.doctors[i].displayedAddress = "";
        if (this.doctors[i].name !== doc.name) {
          this.filteredDoctors.push(this.doctors[i]);
        }
      }
    }
    this.filteredDoctors.sort((a, b) => a.rating < b.rating ? 1 : a.rating > b.rating ? -1 : 0)
    doc.displayedAddress = doc.address;
    this.filteredDoctors.unshift(doc);
  }
}
