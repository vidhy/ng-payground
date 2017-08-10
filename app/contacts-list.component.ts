import {Component, OnInit, Output, EventEmitter, Input} from "@angular/core";
import {ContactsService} from "./contacts.service";
import {Contact} from "./contact.interface";
@Component({
    selector: 'contacts-list',
    template: `
        <ul>
        
           <li highlight="" *ngFor="let contact of contacts" class="item" [class.active]="selected==contact">
               <a  (click)="onSelect(contact)">{{contact.firstName}} {{contact.lastName | payUppercase}}</a>
               <a (click)="remove(contact)" class="remove" title="Remove"><span class="glyphicon glyphicon-remove-sign"></span></a>
           </li>
         
        
        
        </ul>
     

      `,
    //providers: [ContactsService]
})
export class ContactsListComponent implements OnInit {


    @Input() selected:Contact;
    @Output() selectedChange = new EventEmitter();

    public contacts: Contact[];

    constructor(private contactsService: ContactsService) {

    }

    onSelect(contact: Contact) {
        this.selected = contact;
        this.selectedChange.emit(contact)

    }


    remove(contact: Contact) {
        this.contactsService.remove(contact.id).subscribe(() => {
            this.getAllContacts()
        });
        this.selectedChange.emit(undefined);

    }


    getAllContacts() {
        this.contactsService.getAll().subscribe((contacts) => {
            this.contacts = contacts;
        })
    }

    ngOnInit() {
        this.getAllContacts();
    }

}