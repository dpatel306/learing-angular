import { NgModule } from "@angular/core";
import { App } from "./app";
import { RouterOutlet } from "@angular/router";
import { UserProfileInformation } from "./user-profile-information/user-profile-information";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

@NgModule({
    declarations: [App],
    bootstrap: [App],
    imports: [BrowserModule, RouterOutlet, UserProfileInformation, BrowserAnimationsModule],
    providers: [
        providePrimeNG({
            theme: {
                preset: Aura
            },
            translation: {
                dateFormat: 'mm/dd/yy'
            }
        })
    ]
})
export class AppModule { }