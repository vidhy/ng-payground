import {Injectable} from "@angular/core";
import {Contact} from "./contact.interface";
import {LoggerService} from "./logger.service";



@Injectable()
export class ContactsService {
    private static _contactId = 5;


    constructor(private loggerService:LoggerService) {

    }

    // private CONTACTS: Contact[] = [
    //     {id: 1, firstName: "Max", lastName: "Smith", email: "max@gmail.com"},
    //     {id: 2, firstName: "Chris", lastName: "Raches", email: "chris@gmail.com"},
    //     {id: 3, firstName: "Michael", lastName: "Alloy", email: "michael@gmail.com"},
    //     {id: 4, firstName: "John", lastName: "Doe", email: "john@gmail.com"},
    //     {id: 5, firstName: "Jenny", lastName: "Doe", email: "jenny@gmail.com"}
    // ];

    public getAll() {
        // this.loggerService.log('Contacts loaded');
        // return this.CONTACTS;
    }

    public remove(id: number) {
        // let ind = this.findIndexById(id);
        // if( ind>=0 )
        //     this.CONTACTS.splice(ind, 1);
    }


}