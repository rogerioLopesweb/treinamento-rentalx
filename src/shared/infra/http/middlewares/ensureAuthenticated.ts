import { verify } from "jsonwebtoken";
import { Request,Response, NextFunction } from "express";
import 'dotenv/config'

import { AppError } from "@shared/errors/AppError";
import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";

interface IPayload {
    sub: string;
}

async function ensureAuthenticated(request :Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if(!authHeader){
       throw new AppError("Token missing", 401);
    }

    const [bearer, token] = authHeader.split(" ");
    
   try {
       const { sub: user_id } = verify(token, process.env.APP_TOKEN) as IPayload;
       console.log( user_id );
       
       const usersRepository = new UsersRepository();
       const user =  usersRepository.findById(user_id);
       if(!user){
        throw new AppError("User does not exist!", 401);
       }
       //customizacao de types express pasta @types
       request.user = {
         id: user_id,
       }
    
    next();
   } catch  {
      throw new AppError("Invalid token!", 401);
   }

}


export { ensureAuthenticated }