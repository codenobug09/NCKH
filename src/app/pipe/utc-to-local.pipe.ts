import { Pipe, PipeTransform } from '@angular/core';
import { format, toZonedTime } from 'date-fns-tz';
@Pipe({
  name: 'utcToLocal',
})
export class UtcToLocalPipe implements PipeTransform {
  transform(
    utcDate: string,
    formatStr: string = '"dd/MM/yyyy HH:mm"',
    timeZone: string = 'Asia/Ho_Chi_Minh'
  ): string {
    if (!utcDate) return '';

    const zonedDate = toZonedTime(utcDate, timeZone); // Chuyển từ UTC sang giờ địa phương
    return format(zonedDate, formatStr, { timeZone });
  }
}
