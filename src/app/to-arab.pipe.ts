import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toArab'
})
export class ToArabPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case 'true':
        return 'نعم';
      case 'false':
        return 'لا';
      case '1':
        return 'نعم';
      case '0':
        return 'لا';
      case 'director':
        return 'المدير';
      case 'manager':
        return 'مشرف عام';
      case 'supervisor':
        return 'مشرف خيمة';
      case 'aidesup':
        return 'مشرف مساعد';
      case 'supervisor':
        return 'مشرف خيمة';
      case 'inter':
        return 'عميل';
      case 'jure':
        return 'لجنة الرقابة';
      case 'mission':
        return 'مهمات خاصة';
      case 'aidejure':
        return 'مساعد لجنة الرقابة';
      default:
        return '';
    }
  }

}
