import * as jwt from "jsonwebtoken";

export function generateToken(id: any, tokenExpiresIn: string) {
  return jwt.sign({ id }, process?.env?.SECRET_KEY || "VKP", {
    expiresIn: tokenExpiresIn,
  });
}
export function verifyToken(
  token: string,
  customFunction?: jwt.VerifyCallback
) {
  return jwt.verify(token, process?.env?.SECRET_KEY || "VKP", customFunction);
}
