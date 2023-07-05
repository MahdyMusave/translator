import { Controller, Get, Param } from '@nestjs/common';

@Controller('user')
export class UsersController {
    @Get()
    getUsers(){
        return [];
    }

    @Get(':id')
    getUserById(@Param('id') id){
        return id
    }

}
