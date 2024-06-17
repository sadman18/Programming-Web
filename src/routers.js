import HomePage from "./components/HomePage.vue"
import SignUp from "./components/SignUp.vue"
import LogIn from "./components/LogIn.vue"
import SpotDetails from "./components/SpotDetails.vue"
import AdminPage from "./components/AdminPage"
import UserProfile from "./components/UserProfile.vue"
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
        path: "/spotdetails/:id"
    },

    {
        name: "AdminPage",
        component: AdminPage,
        path: "/AdminPage"
    },
    {
        name: "UserProfile",
        component: UserProfile,
        path: "/UserProfile"
    }
  
]

const router = createRouter({ 
    history: createWebHistory(),
    routes
});

export default router;