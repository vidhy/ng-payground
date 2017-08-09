import {Component, ViewChild, OnInit} from "@angular/core";
import {Contact} from "./contact.interface";
import {ContactsService} from "./contacts.service";
import {NgForm} from "@angular/forms";
import {Subscription, Observable} from "rxjs/Rx";
import 'rxjs/add/operator/debounceTime'


@Component({
    selector: 'my-app',
    template: `
        <h6>Today's date: {{ now | async | date: 'mediumTime' | payUppercase }}</h6>
        <contacts-list (contactSelected)="selectedContact = $event"></contacts-list>
        <contact-details [contact]="selectedContact"></contact-details>
        
       



        `
})
export class AppComponent {



    public now:Date;
    public selectedContact: Contact;

    public contacts: Contact[];

    constructor() {
        this.now = Observable.create((observer) => {
            setInterval(() => {
                observer.next(new Date())
            }, 1000)
        })


    }









}

