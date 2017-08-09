import {Injectable} from "@angular/core";


@Injectable()
export class ContactsLoggerService {

    public log(message?:string):void {
        message ? console.log(`Contacts logger: ${message}`) : console.log('A contacts logger')
    }
}