import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {ContactsService} from "./contacts.service";
import {Contact} from "./contact.interface";
@Component({
    selector: 'contacts-list',
    template: `
        <ul>
        
           <li *ngFor="let contact of contacts" class="item" [class.active]="selected==contact">
               <a (click)="onSelect(contact)">{{contact.firstName}} {{contact.lastName | uppercase}}</a>
        
           </li>
         
        
        
        </ul>
     

      `
})
export class ContactsListComponent implements OnInit {


    @Output() contactSelected = new EventEmitter();

    public selected:Contact;
    public contacts: Contact[];

    constructor(private contactsService: ContactsService) {

    }

    onSelect(contact:Contact) {
        this.selected = contact;
        this.contactSelected.emit(contact)

    }

    ngOnInit() {
        this.contacts = this.contactsService.getAll()
    }

}