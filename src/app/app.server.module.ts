import {NgModule} from '@angular/core';
import {ServerModule} from '@angular/platform-server';
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppModule} from './app.module';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {AppShellComponent} from './app-shell/app-shell.component';

const routes: Routes = [{path: 'app-shell-path', component: AppShellComponent}];

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    FormsModule,
    ReactiveFormsModule,
    ModuleMapLoaderModule,
    RouterModule.forRoot(routes) // <-- *Important* to have lazy-loaded routes work
  ],
  bootstrap: [AppComponent],
  declarations: [AppShellComponent],
})
export class AppServerModule {
}
