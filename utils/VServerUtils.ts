import mongoose, { model } from "mongoose";
import { Model } from "mongoose";
import { AppRequest } from "../types";
export class VServerUtils {
  static resSuccess(data: any, msg = "successful") {
    if (Array.isArray(data))
      return { resType: "VKP", status: true, data: [...data], message: msg };
    return { resType: "VKP", status: true, data: [data], message: msg };
  }
  static resError(ex: any) {
    return {
      resType: "VKP",
      status: false,
      msg: ex?.message,
      stack: ex?.stack,
    };
  }
  // creating mongodb id
  static createModel<T>(name: string, schema: any) {
    const myModel: Model<T> = model<T>(name, schema);
    return myModel;
  }
  // validates mongo db id
  static async validateMongoDbId(id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) return this.throwError("This id is not valid.");
    return isValid;
  }
  static throwError(ex: string) {
    throw new Error(ex.toString());
  }

  static async isUserObj(req: AppRequest) {
    const userObj = await req.User;
    if (userObj) return userObj;
    return this.throwError("Something happend wrong with credentials.");
  }

  static async isBodyObj(req: AppRequest) {
    const bodyObj = await req.body;
    for (let key in bodyObj) {
      if (bodyObj.hasOwnProperty(key)) {
        return bodyObj;
      }
    }
    return this.throwError("Body is null.");
  }
}
