import {SettingsComponent} from "./components/settings/settings.component";
import {OrdersComponent} from "./components/orders/orders.component";
import {InvoicesComponent} from "./components/invoices/invoices.component";
import {PaymentsComponent} from "./components/payments/payments.component";
import { routesProfileSettings } from "./components/settings/routes";


export const routesProfile = [
    { path: '', component: SettingsComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'invoices', component: InvoicesComponent },
    { path: 'settings', component: SettingsComponent, children: [
            ...routesProfileSettings
        ]
    },
    { path: 'payments', component: PaymentsComponent }
]
