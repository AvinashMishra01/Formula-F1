import { Component } from '@angular/core';
import { DataService } from '../data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-designe',
  templateUrl: './designe.component.html',
  styleUrls: ['./designe.component.css']
})
export class DesigneComponent {
  selectedTeam= '';
  selectedCountry= '';
  selectedYear='';
  teams=[]
  countries=[]
  years=[]
  drivers = []


  constructor(public service:DataService){}

 f1Driverobj={}




  uniqueCountry={};
  uniqueTeam={}
  uniqueYears={}



  async ngOnInit() {





    let resp= await this.service.dataGet();

await this.filterData(resp['data'])



  }

async saveData()
{
  console.log(" save data obj ", this.f1Driverobj)

  Swal.fire("Success", " Data Is Temporary Added", 'success');
  this.drivers.push(this.f1Driverobj);
  await this.filterData(this.drivers)
  this.f1Driverobj={};

}

async filterData([...data])
{
  console.log("this is th efilter data ", data )
  this.drivers.length=0
  data.filter((item)=>{
    if(this.uniqueCountry[item.country]==undefined)
    {
      this.uniqueCountry[item.country]=item.country;
      this.countries.push(item.country)
    }
    if(this.uniqueTeam[item.team]==undefined)
    {
      this.uniqueTeam[item.team]=item.team
      this.teams.push(item.team)
    }
    if(this.uniqueYears[item.year]==undefined)
   {
    this.uniqueYears[item.year]= item.year;
    this.years.push(item.year)
   }
  this.drivers.push(item)

})

}


  get  filteredDrivers() {
    return this.drivers.filter((driver) => {
      return (
        (this.selectedTeam === '' || driver.team === this.selectedTeam) &&
        (this.selectedCountry === '' || driver.country === this.selectedCountry) &&
        (this.selectedYear==='' || driver.year=== this.selectedYear)
      );
    });
  }

}
