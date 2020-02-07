import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Dashboard",
      status: false
    },
    children: [
      {
        path: "default",
        loadChildren: "./default/default.module#DefaultModule"
      },
      {
        path: "event",
        loadChildren: "./event/event.module#EventModule"
      },
      {
        path: "quick-start",
        loadChildren: "./event/event.module#EventModule"
      },
      { path: "event/:idE", loadChildren: "./event/event.module#EventModule" },
      {
        path: "event/:idE/:type",
        loadChildren: "./event/event.module#EventModule"
      },
      {
        path: "event/:idE/:type/:tabs",
        loadChildren: "./event/event.module#EventModule"
      },

      {
        path: "home",
        loadChildren: "./home/home.module#HomeModule"
      },
      {
        path: "ecommerce",
        loadChildren: "./ecommerce/ecommerce.module#EcommerceModule"
      },
      {
        path: "analytics",
        loadChildren: "./analytics/analytics.module#AnalyticsModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
