import {Injectable} from "@angular/core";
import {Contact} from "./contact.interface";
import {LoggerService} from "./logger.service";
import {Http} from "@angular/http";


const API_ENDPOINT = "http://localhost:3005";




@Injectable()
export class ContactsService {
    private static _contactId = 5;


    constructor(private loggerService:LoggerService, private http:Http) {

    }

    // private CONTACTS: Contact[] = [
    //     {id: 1, firstName: "Max", lastName: "Smith", email: "max@gmail.com"},
    //     {id: 2, firstName: "Chris", lastName: "Raches", email: "chris@gmail.com"},
    //     {id: 3, firstName: "Michael", lastName: "Alloy", email: "michael@gmail.com"},
    //     {id: 4, firstName: "John", lastName: "Doe", email: "john@gmail.com"},
    //     {id: 5, firstName: "Jenny", lastName: "Doe", email: "jenny@gmail.com"}
    // ];

    public getAll() {
        return this.http.get(`${API_ENDPOINT}/contacts`).map((response) => {
            return response.json() as Contact[];
        })
    }

    public remove(id: number) {
        return this.http.delete(`${API_ENDPOINT}/contacts/${id}`).map((response) => {
            return response.json() as Contact;
        })
    }


}