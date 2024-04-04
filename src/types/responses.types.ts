import { HttpStatus } from "@nestjs/common";

export type TStandardErrorObject = { origin: string; message: string };

export type TSuccessResponse<T, E> = {
  Input: T;
  Output: E;
  Status: { Code: HttpStatus; Message: string };
  Infos: string[];
};

export type TFailureResponse<T, E> = {
  Input: T;
  Errors: E;
  Status: { Code: HttpStatus; Message: string };
};
