import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'new'
})

export class NewPipe implements PipeTransform {
  transform(value: number, args?: any): string {
    return value.toString().replace(".", ",");
  }
}