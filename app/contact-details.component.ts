import {Component, Input, EventEmitter, Output, OnChanges, SimpleChange, SimpleChanges} from "@angular/core";
import {Contact} from "./contact.interface";
@Component({
    selector: 'contact-details',
    template: `
        <div id="contactsDetailsContainer" *ngIf="selectedContact">
            <span *ngIf=" !showEdit">
                <label>First Name: </label><b>{{selectedContact.firstName}}</b><br/>
                <label>Last Name: </label><b>{{selectedContact.lastName}}</b><br/>
                <label>Email: </label><b>{{selectedContact.email}}</b><br/>
                <label></label><a class="text-danger" (click)="showEdit=true"><span class="glyphicon glyphicon-edit"></span>Edit</a><br/>
            </span>
         <form name="editContactForm" #form="ngForm" (ngSubmit)="onSubmit(form)" *ngIf="showEdit" novalidate>
                <label for="firstName">First Name: </label>
                <input id="firstName" name="firstName" [ngModel]="selectedContact.firstName" required><br/>
                <div class="alert alert-danger" role="alert" *ngIf="form.controls.firstName && !form.controls.firstName.pristine && !form.controls.firstName.valid">First name is required</div>
                
                <label for="lastName">Last Name: </label>
                <input id="lastName" name="lastName" [ngModel]="selectedContact.lastName" required><br/>
                <div class="alert alert-danger" role="alert" *ngIf="form.controls.lastName && !form.controls.lastName.pristine && !form.controls.lastName.valid">Last name is required</div>
                
                <label for="email">Email: </label>
                <input id="email" name="email" [ngModel]="selectedContact.email" email><br/>
                <div class="alert alert-danger" role="alert" *ngIf="form.controls.email && !form.controls.email.valid">Email is invalid</div>
                
                
                <label></label>
                <input type="submit" class="btn btn-danger" value="{{ !contact.id ? 'Add' : 'Save' }}" [disabled]="form.invalid || form.pristine" />
                <a href="#" class="text-danger" (click)="onCancel()">Cancel</a>
          </form>
       </div>



`
})

export class ContactDetailsComponent implements OnChanges {

    showEdit: boolean;
    selectedContact: Contact;

    @Input() set contact(_contact:Contact) {

        _contact && _contact.id === null ? this.showEdit = true : this.showEdit = false;

        this.selectedContact = _contact;


    }
    @Output() contactChange = new EventEmitter<Contact>();


    onCancel() {
        this.showEdit = false;
    }

    ngOnChanges(changes:SimpleChanges) {
        console.log('Changes happened!', changes)
        console.log(changes['contact'].currentValue)

    }


}