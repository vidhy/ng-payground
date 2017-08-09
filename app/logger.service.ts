import {Injectable} from "@angular/core";


@Injectable()
export class LoggerService {

    public log(message?:string):void {
        message ? console.log(message) : console.log('Default log')
    }
}