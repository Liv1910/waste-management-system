import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WasteCollectionComponent } from './components/waste-collection/waste-collection.component';
import { RecyclingComponent } from './components/recycling/recycling.component';
import { DisposalComponent } from './components/disposal/disposal.component';
import { ReportsComponent } from './components/reports/reports.component';
import { LoginComponent } from './components/login/login.component'; // Add this import
import { ProfileComponent } from './components/profile/profile.component'; // Add this import
import { SignupComponent } from './components/signup/signup.component'; // Add this import


export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'waste-collection', component: WasteCollectionComponent },
  { path: 'recycling', component: RecyclingComponent },
  { path: 'disposal', component: DisposalComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'login', component: LoginComponent }, // Add this route
  { path: 'profile', component: ProfileComponent }, // Add this route
  { path: 'signup', component: SignupComponent }, // Add this route
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Optional: redirect to dashboard if no path is specified
  { path: '**', redirectTo: '/dashboard' } // Optional: catch-all route for 404 errors
];
