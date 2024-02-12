import { NextFunction, Request, Response } from "express";
import { VServerUtils } from "../utils/VServerUtils";
export function notFound(req: Request, res: Response, next: NextFunction) {
  const err = new Error(`Not Found: ${req.originalUrl}`);
  res.status(404);
  return next(err);
}

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const statusCode = res.statusCode == 200 ? 500 : res.statusCode;
  res.status(statusCode);
  return res.json(VServerUtils.resError(err));
}
