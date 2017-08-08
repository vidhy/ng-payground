import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import {AppModule} from "./app.module";

platformBrowserDynamic()
.bootstrapModule(AppModule)
.catch(err => console.log(err));


/*
 - Component interaction
 - SelectedComponent
     - Two-way binding between ContactsList and ContactDetails
     - Updates
        - On delete
        - On update
        - on add
 */