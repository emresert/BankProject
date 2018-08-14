import {Generics} from './generic';
//import {CompanyBranch} from './company';
import {Town} from './town';
import {City} from './city';
import { RendererFactory2 } from '../../node_modules/@angular/core';

export class Bank extends Generics {
  id: string;
  name: string;
  address: string;
  contactName: string;
  contactSurname: string;
  contactPhone: string;
  secondContactPhone: string;
  companyLogo: string;
  town: Town;
  city: City;
}


export class BankBranch extends Generics {
  id: string;
  name: string;
  address: string;
  contactName: string;
  contactSurname: string;
  contactPhone: string;
  phone: string;
  bank: Bank;
  town: Town;
  city: City;
}

export class BankDetail extends Generics {
  id: string;
  name: string;
  maxAmount: number;
  maxBoundary: number;
  minBoundary: number;
  bankBranch: BankBranch;
}

export class BankBranchDeal extends Generics {
  id: string;
  bankBranch: BankBranch;
  //companyBranch: CompanyBranch;
}

