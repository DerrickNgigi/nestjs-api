import { Injectable } from "@nestjs/common"
import { PrismaService } from "src/prisma/prisma.service"
import { AuthDto } from "./dto"
import * as argon from 'argon2';


@Injectable({})
export class AuthService{
    //Inject prisma service
    constructor(private prisma: PrismaService){}

    //Sign up route
    async signup(dto:AuthDto){
        //generate the password Has
        const password = await argon.hash(dto.password);
        
        //save the user to the database
        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                password: password
            }
        });
        //return the saved user
        return user;
    }

    //Sign in route
    signin(){
        return {
            msg: 'I am signin'
        }
    }
}