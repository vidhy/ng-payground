

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {ContactDetailsComponent} from "./contact-details.component";
import {ContactsListComponent} from "./contacts-list.component";
import {ContactsService} from "./contacts.service";


@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, ContactDetailsComponent, ContactsListComponent],
    bootstrap: [AppComponent],
    providers: [ContactsService]

})
export class AppModule {

}