

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {ContactDetailsComponent} from "./contact-details.component";
import {ContactsListComponent} from "./contacts-list.component";
import {ContactsService} from "./contacts.service";
import {FormsModule} from "@angular/forms";
import {LoggerService} from "./logger.service";
import {ContactsLoggerService} from "./contacts-logger.service";
import {HighlightDirective} from "./highlight.directive";
import {PayUppercasePipe} from "./payUppercase.pipe";
import {HttpModule} from "@angular/http";


@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, ContactDetailsComponent, ContactsListComponent, HighlightDirective, PayUppercasePipe],
    bootstrap: [AppComponent],
    providers: [ContactsService, { provide: LoggerService, useClass: ContactsLoggerService}]


})
export class AppModule {

}