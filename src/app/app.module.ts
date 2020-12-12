import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsComponent } from './posts/posts.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';
import {MatInputModule} from '@angular/material/input';
import { MandatoryDirective } from './mandatory.directive';
import { ValidateEmailDirective } from './validate-email.directive';
import { ValidateZipDirective } from './validate-zip.directive';
import { ValidatePhoneDirective } from './validate-phone.directive';
import { ValidateWebDirective } from './validate-web.directive';
import { RestInterceptor } from './rest.interceptor';
import { BoldDirective } from './bold.directive';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    UserComponent,
    ErrorComponent,
    MandatoryDirective,
    ValidateEmailDirective,
    ValidateZipDirective,
    ValidatePhoneDirective,
    ValidateWebDirective,
    BoldDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: RestInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
