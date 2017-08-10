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
        <contacts-list [(selected)]="selected"></contacts-list>
         <a id="add" href="#" class="text-danger" (click)="onAdd()"><span class="glyphicon glyphicon-plus"></span>Add</a>
        <contact-details [(contact)]="selected"></contact-details>
        
       



        `
})
export class AppComponent {


    public now: Date;
    public selected: Contact;

    public contacts: Contact[];

    onAdd() {
        this.selected = {id: null ,firstName: "", lastName: "", email: ""};
    }

    constructor() {
        this.now = Observable.create((observer) => {
            setInterval(() => {
                observer.next(new Date())
            }, 1000)
        })


    }


}

