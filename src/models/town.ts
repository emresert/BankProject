import {City} from './city';
import { ResponseError} from './generic';

export class Town extends ResponseError{
  id: number;
  name: string;
  city: City;
}
