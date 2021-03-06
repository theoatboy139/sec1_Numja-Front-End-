import Maintenance from "@/views/maintenance/index.vue";
import AdminSuspendUser from "@/views/maintenance/suspend/AdminSuspendUser.vue";
import Verify from "@/views/maintenance/Verify.vue";
import MaintenanceHome from "@/views/maintenance/home.vue";

export const maintenanceRouter = {
  path: "/maintenance",
  name: "Maintenance",
  component: Maintenance,
  children: [
    {
      path: "",
      component: MaintenanceHome
    },
    {
      path: "suspend",
      component: AdminSuspendUser
    },
    {
      path: "verify",
      component: Verify
    },
    {
      path: "*",
      redirect: "/maintenance"
    }
  ]
};
