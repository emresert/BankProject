import {User} from './user';


export class ResponseError {
  error: string;
  errorDescription: string;
  httpStatus: number;
}


export class Generics extends ResponseError{
  createdBy: User;
  updatedBy: User;
  deletedBy: User;
  createDate: number;
  updateDate: number;
  status: boolean;
}

