import { verify } from "jsonwebtoken";
import { Request,Response, NextFunction } from "express";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";
import { AppError } from "../errors/AppError";

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
       const { sub: user_id } = verify(token, "ef0fd34af5eecb4319d40158db5b92b8") as IPayload;
       console.log( user_id );
       
       const usersRepository = new UsersRepository();
       const user =  usersRepository.findById(user_id);
       if(!user){
        throw new AppError("User does not exist!", 401);
       }
    
    next();
   } catch  {
      throw new AppError("Invalid token!", 401);
   }

}


export { ensureAuthenticated }