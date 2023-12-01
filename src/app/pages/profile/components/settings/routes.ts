import {ProfileInformationComponent} from "./profile-information/profile-information.component";
import {ProfilePasswordChangeComponent} from "./profile-password-change/profile-password-change.component";
import {ManagersComponent} from "./managers/managers.component";
import {CompanyComponent} from "./company/company.component";


export const routesProfileSettings = [
    { path: '', component: ProfileInformationComponent },
    { path: 'profile-information', component: ProfileInformationComponent },
    { path: 'password-change', component: ProfilePasswordChangeComponent },
    { path: 'managers', component: ManagersComponent },
    { path: 'company', component: CompanyComponent }
]
