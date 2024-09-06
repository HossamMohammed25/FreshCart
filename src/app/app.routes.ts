import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layout/blank-layout/blank-layout.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { loginGuard } from './core/guards/login.guard';
import { authGuard } from './core/guards/auth.guard';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: AuthLayoutComponent,
        canActivate: [loginGuard],
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            {
                path: 'login',
                loadComponent: () => import('./components/login/login.component').then(c => c.LoginComponent),title:"login"
            },
            {
                path: 'register',
                loadComponent: () => import('./components/register/register.component').then(c => c.RegisterComponent),title:"register"
            },
            {
                path: 'forgot',
                loadComponent: () => import('./components/forget-password/forget-password.component').then(c => c.ForgetPasswordComponent),title :"forget Password"
            }
        ]
    },
    {
        path: '',
        component: BlankLayoutComponent,
        canActivate: [authGuard],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {
                path: 'home', component:HomeComponent, title:'freshCart'
            },
            {
                path: 'brands',
                loadComponent: () => import('./components/brands/brands.component').then(c => c.BrandsComponent),title:"brands"
            },
            {
                path: 'cart',
                loadComponent: () => import('./components/cart/cart.component').then(c => c.CartComponent),title:"cart"
            },
            {
                path: 'categories',
                loadComponent: () => import('./components/categories/categories.component').then(c => c.CategoriesComponent), title:"category"
            },
            {
                path: 'product',
                loadComponent: () => import('./components/product/product.component').then(c => c.ProductComponent) , title:"product"
            },
            {
                path: 'details/:id',
                loadComponent: () => import('./components/details/details.component').then(c => c.DetailsComponent), title: "details"
            },
            {
                path: 'allorders',
                loadComponent: () => import('./components/allorders/allorders.component').then(c => c.AllordersComponent), title :"allorders"
            },
            {
                path: 'orders/:id',
                loadComponent: () => import('./components/orders/orders.component').then(c => c.OrdersComponent), title : "orders"
            },
            {path:'wishlist',
                 loadComponent: () => import('./components/wishlist/wishlist.component').then(c => c.WishlistComponent), title:'wishlist'},
                 { path: '**', component: NotfoundComponent }
        ]
    },
];
