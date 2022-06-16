import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { PadlockComponent } from './padlock/padlock.component';
import { DeviceComponent } from './device/device.component';
import { MissionComponent } from './mission/mission.component';
import{MatMenuModule} from  '@angular/material/menu';
import{MatIconModule} from  '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { AddPadlockComponent } from './modals/add-padlock/add-padlock.component';
import { UpdatePadlockComponent } from './modals/update-padlock/update-padlock.component';
import { AddDeviceComponent } from './modals/add-device/add-device.component';
import { UpdateDeviceComponent } from './modals/update-device/update-device.component';
import { UpdateDevicefComponent } from './modals/update-devicef/update-devicef.component';
import { AddDevicefComponent } from './modals/add-devicef/add-devicef.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    PadlockComponent,
    DeviceComponent,
    MissionComponent,
    AddPadlockComponent,
    UpdatePadlockComponent,
    AddDeviceComponent,
    UpdateDeviceComponent,
    UpdateDevicefComponent,
    AddDevicefComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
