import { Body, Controller, Delete, Post, Put } from '@nestjs/common';
import { TranslationService } from './translation.service';
import { DeleteTranslationDTO, TranslationEntity,TranslationUpdateDTO } from './entities/translation.entity';

@Controller('translation')
export class TranslationController {
    constructor(
        private translationService:TranslationService
    ){
        console.log('translationController instaniated')
    }

    @Post()
    insertTranslation(
        @Body() translation: TranslationEntity){

            return this.translationService.insert(translation);
    }

    @Put()
    updateTranslation(
        @Body() translation:TranslationUpdateDTO
    ){
        console.log(translation)
        return this.translationService.update(translation)
    }

    @Delete()
    DeleteTranslation(
        @Body() translation:DeleteTranslationDTO
    ){
        return this.translationService.delete(translation) 
    }
}
