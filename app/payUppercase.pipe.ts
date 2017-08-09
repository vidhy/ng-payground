import {Pipe, PipeTransform} from "@angular/core";



@Pipe({
    name: 'payUppercase'
})
export class PayUppercasePipe implements PipeTransform{
    transform(inputValue:string, pattern: string = 'upper') {
        return inputValue && inputValue.toUpperCase();
    }

}