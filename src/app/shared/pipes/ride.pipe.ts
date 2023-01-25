import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'appFilter'
})

export class RidePipe implements PipeTransform {
  transform(items: any, value: string, field: string): any {
    if (items.length === 0 || !value) {
      return items;
    }
    return items.filter((item: any) => {
      if (!isNaN(item[field])) {
        item[field] += "";
      }
      return item[field].toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
  }
}