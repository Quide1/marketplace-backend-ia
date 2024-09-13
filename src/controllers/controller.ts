import { type Request, type Response } from "express";
export class RouterController {
 
  static async generateContent(req: Request, res: Response) {
    return res.json({message:"hola desde generate content"});
  }
}
