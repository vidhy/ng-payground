import {Component, ViewChild} from "@angular/core";
import {Contact} from "./contact.interface";
@Component({
    selector: 'my-app',
    template: `
        <contacts-list (contactSelected)="selectedContact = $event"></contacts-list>
        <contact-details [contact]="selectedContact"></contact-details>
        `
})
export class AppComponent {
    public selectedContact:Contact;

}

