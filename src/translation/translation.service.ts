import { Injectable } from '@nestjs/common';
import { JsonStorageService } from 'src/db/json-storage-service';
import { DeleteTranslationDTO, TranslationEntity,TranslationUpdateDTO } from './entities/translation.entity';
import * as md5 from 'md5';

@Injectable()
export class TranslationService {
    constructor(
        private jsonStorageService:JsonStorageService
    ){
        console.log('TranslationService instantiated')
    }

    insert(translation: TranslationEntity) {
        translation.id = md5(translation.phrase);
        translation.createdAt = new Date();
        return this.jsonStorageService.save('translation', translation);
      }

      update(translation:TranslationUpdateDTO){
        return this.jsonStorageService.updateById('translation',translation.id,translation)
      }

      delete(translation:DeleteTranslationDTO){
        return this.jsonStorageService.deleteById('translation',translation.id)
      }
      
}
