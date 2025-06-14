import React from "react";
const publicRoutes = [
//     {
//     key: "pages.intro",
//     path: `/`,
//     access: ["DEVELOPER","RECRUITER","STALKER","EXPLORER"],
//     component: React.lazy(()=>
//     import("../pages/Intro")),
// },
{
    key: "pages.home",
    path: `/home`,
    access: ["DEVELOPER","RECRUITER","STALKER","EXPLORER"],
    component: React.lazy(()=>
    import("../pages/Home")),

},
{
    key: "pages.home.recruiter",
    path: `/`,
    access: ["RECRUITER"],
    component: React.lazy(()=>
    import("../pages/RecruiterHome")),

},
// {
//     key: "pages.skills.dynamic",
//     path: `/skills/:skillSlug`,
//     access: ["USER"],
//     component: React.lazy(() => import("../pages/Skills")),
// }

// {
//     key: "pages.home.developer",
//     path: `/home/developer`,
//     access: ["DEVELOPER"],
//     component: React.lazy(()=>
//     import("../pages/DeveloperHome")),

]

export  default publicRoutes