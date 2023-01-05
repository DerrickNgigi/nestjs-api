import { Body, Controller, ParseIntPipe, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService){}

    //Sign up route
    @Post('signup')
    signup(
        @Body() dto:AuthDto,
        ){
            // console.log(dto)
        return this.authService.signup(dto)
    }

    //Sign in route
    @Post('signin')
    signin(){
        return this.authService.signin()
    }
}