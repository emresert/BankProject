import { Component, OnInit } from '@angular/core';
import { Bank } from '../models/bank';
import { City } from '../models/city';
import { BankService } from './bank.service';
import { Town } from '../models/town';


@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css'],
  providers: [BankService]
})
export class BankComponent implements OnInit {
  public defaultCity: City;
  public defaultTown: Town;
  public name: string;
  public address: string;
  public contactName: string;
  public contactSurname: string;
  public contactPhone: string;
  public secondContactPhone: string;
  public bankLogo:string='';
  public city: City;
  public town: Town;
  title = "Bank";
  bank: Bank[];

  constructor(private bankService: BankService) { }

  ngOnInit() {
    this.getContent();
    this.defaultCity={
      id: 40,
      name: "İstanbul",
      code: 34,
      error:null,
      errorDescription:null,
      httpStatus:null
    };

    this.defaultTown={
      city:this.defaultCity,
      id:459,
      name:'BEYOĞLU',
      error:null,
      errorDescription:null,
      httpStatus:null
    }
  }
  getContent() {
    this.bankService.getContent().subscribe((res: Bank[]) => {
    this.bank = res;
      console.log(res);
    });
  }
  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    let reader = e.target;
    this.bankLogo = reader.result;
    console.log(this.bankLogo)
  }
  Create() {
    const newPost: Bank = new Bank();
    newPost.name = this.name;
    newPost.address = this.address;
    newPost.contactName = this.contactName;
    newPost.contactSurname = this.contactSurname;
    newPost.contactPhone = this.contactPhone;
    newPost.secondContactPhone = this.secondContactPhone;
    newPost.companyLogo=this.bankLogo;
    newPost.city=this.defaultCity;
    newPost.town =this.defaultTown;
    this.bankService.CreateUser(newPost).subscribe((resp: Bank) => {
      console.log(resp); this.bank.push(resp);
    });
  }
  

  
}
