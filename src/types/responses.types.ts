import { HttpStatus } from "@nestjs/common";

export type MSuccessResponse<T, E> = {
  Input: T;
  Output: E;
  Status: { Code: HttpStatus; Message: string };
  Infos: string[];
};

export type MFailureResponse<T, E> = {
  Input: T;
  Errors: E;
  Status: { Code: HttpStatus; Message: string };
};
