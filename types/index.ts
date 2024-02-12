import { Request, Response } from "express";
import { ClientSession } from "mongoose";

export interface AppRequest<T = any> extends Request {
  User?: any;
  parsedQuery?: any;
  body: T;
  transaction?: ClientSession;
}

export interface AppResponse extends Response {}
