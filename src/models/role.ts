import {ResponseError} from './generic';

export class Role extends ResponseError {
  id: string;
  name: string;
}
