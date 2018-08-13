import {ResponseError} from './generic';

export class City extends ResponseError{
  id: number;
  name: string;
  code: number;
}
