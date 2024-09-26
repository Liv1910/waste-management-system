import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WasteCollectionComponent } from './components/waste-collection/waste-collection.component';
import { RecyclingComponent } from './components/recycling/recycling.component';
import { DisposalComponent } from './components/disposal/disposal.component';
import { ReportsComponent } from './components/reports/reports.component';
import { AdminManageUsersComponent } from './components/admin-manage-users/admin-manage-users.component';
import { SchedulePickupComponent } from './components/schedule-pickup/schedule-pickup.component';
import { PickupHistoryComponent } from './components/pickup-history/pickup-history.component';
import { ManageNotificationsComponent } from './components/manage-notifications/manage-notifications.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'waste-collection', component: WasteCollectionComponent },
  { path: 'recycling', component: RecyclingComponent },
  { path: 'disposal', component: DisposalComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'admin/manage-users', component: AdminManageUsersComponent },
  { path: 'schedule-pickup', component: SchedulePickupComponent },
  { path: 'pickup-history', component: PickupHistoryComponent },
  { path: 'manage-notifications', component: ManageNotificationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }