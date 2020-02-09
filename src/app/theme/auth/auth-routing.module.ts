import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Authentication",
      status: false
    },
    children: [
      {
        path: "login",
        loadChildren: "./login/login.module#LoginModule"
      },
      {
        path: "presta",
        loadChildren: "./prestareg/prestareg.module#PrestaregModule"
      },
      {
        path: "brand",
        loadChildren: "./brandreg/brandreg.module#BrandregModule"
      },
      {
        path: "profile/brand",
        loadChildren: "./brandreg/brandreg.module#BrandregModule"
      },
      {
        path: "profile/presta",
        loadChildren: "./brandreg/brandreg.module#BrandregModule"
      },
      {
        path: "waiting",
        loadChildren: "./waiting/waiting.module#WaitingModule"
      },

      {
        path: "registration",
        loadChildren: "./registration/registration.module#RegistrationModule"
      },
      {
        path: "choicereg",
        loadChildren: "./choicereg/choicereg.module#ChoiceregModule"
      },
      {
        path: "reg-brand",
        loadChildren: "./reg-brand/reg-brand.module#RegBrandModule"
      },

      {
        path: "forgot",
        loadChildren: "./forgot/forgot.module#ForgotModule"
      },
      {
        path: "lock-screen",
        loadChildren: "./lock-screen/lock-screen.module#LockScreenModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
