import HomePage from "./components/HomePage.vue"
import SignUp from "./components/SignUp.vue"
import LogIn from "./components/LogIn.vue"
import SpotDetails from "./components/SpotDetails.vue"
// import Owner from "./components/owner/dashboard"
import {createRouter,createWebHistory  } from "vue-router";

const routes = [
    {
        name: "HomePage",
        component: HomePage,
        path: "/"
    },
    {
        name: "SignUp",
        component: SignUp,
        path: "/signup"
    },
    {
        name: "LogIn",
        component: LogIn,
        path: "/login"
    },
    {
        name: "SpotDetails",
        component: SpotDetails,
        path: "/spotdetails"
    }
  
]

const router = createRouter({ 
    history: createWebHistory(),
    routes
});

export default router;