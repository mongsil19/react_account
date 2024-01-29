import { createBrowserRouter } from "react-router-dom"
import { Suspense, lazy } from "react";

const Loading = <div>Loading......</div>
const ContentsPage = lazy(() => import("../page/ContentsPage"))
const AccountPage = lazy(() => import("../page/AccountPage"))
const WelcomePage = lazy(() => import("../page/WelcomePage"))

const root = createBrowserRouter([
    {
        path: "",
        element: <Suspense fallback={Loading}><WelcomePage/></Suspense>
    },
    {
        path: "/account/test",
        element: <Suspense fallback={Loading}><AccountPage /></Suspense>
    },
    {
        path: "/account/list",
        element: <Suspense fallback={Loading}><ContentsPage /></Suspense>
    },
])

export default root;