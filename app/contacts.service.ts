import {Injectable} from "@angular/core";
import {Contact} from "./contact.interface";



@Injectable()
export class ContactsService {
    private static _contactId = 5;


    private CONTACTS: Contact[] = [
        {id: 1, firstName: "Max", lastName: "Smith", email: "max@gmail.com"},
        {id: 2, firstName: "Chris", lastName: "Raches", email: "chris@gmail.com"},
        {id: 3, firstName: "Michael", lastName: "Alloy", email: "michael@gmail.com"},
        {id: 4, firstName: "John", lastName: "Doe", email: "john@gmail.com"},
        {id: 5, firstName: "Jenny", lastName: "Doe", email: "jenny@gmail.com"}
    ];

    public getAll(): Contact[] {
        return this.CONTACTS;
    }

    public remove(id: number) {
        let ind = this.findIndexById(id);
        if( ind>=0 )
            this.CONTACTS.splice(ind, 1);
    }

    private findById(contactId: number): Contact {
        return this.CONTACTS.find(row => row.id == contactId )
    }

    private findIndexById(contactId: number) {
        let contact = this.findById(contactId);
        if( !contact ) return -1;

        return this.CONTACTS.indexOf(contact);
    }
}