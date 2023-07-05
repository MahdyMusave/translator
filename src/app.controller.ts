import { Body, Controller, Get,Post,Headers } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // <_______step2_________>
 

//   @Post()
//   postSomething(){
//    return new Promise((res,_)=>{
//     setTimeout(()=>{
//       res('post is now');
//     },3000)
//    })
//  }
//  <____step 2______>
@Post()
postSomething(@Body() Body, @Headers() Headers){
  return{
    Body,
    Headers
  }
}


}
