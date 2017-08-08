import {Component, Input} from "@angular/core";
@Component({
    selector: 'contact-details',
    template: `
        <div id="contactsDetailsContainer" *ngIf="contact">
            <span>
                <label>First Name: </label><b>{{contact.firstName}}</b><br/>
                <label>Last Name: </label><b>{{contact.lastName}}</b><br/>
                <label>Email: </label><b>{{contact.email}}</b><br/>
                <label></label><a class="text-danger" (click)="showEdit=true"><span class="glyphicon glyphicon-edit"></span>Edit</a><br/>
            </span>
       </div>`
})

export class ContactDetailsComponent {

    @Input() contact;


}