import {Role} from './role';
import {ResponseError} from './generic';

export class User extends ResponseError {
  id: string;
  name: string;
  password: string;
  confirmPassword: string;
  surname: string;
  mail: string;
  contactPhone: string;
  otherContactPhone: string;
  role: Role;
  responsibility: string;
  createDate: number;
  updateDate: number;
  status: boolean;
}

export class UserInfo extends ResponseError {
  id: string;
  name: string;
  surname: string;
  mail: string;
  contactPhone: string;
  otherContactPhone: string;
  role: Role;
  responsibility: string;
  createdBy: string;
  updatedBy: string;
  deletedBy: string;
  createDate: number;
  updateDate: number;
  status: boolean;
}

