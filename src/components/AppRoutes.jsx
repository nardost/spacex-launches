
import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";

import Launches from "../pages/home/Launches";
import NotFound from "../pages/errors/NotFound";
import NotAuthorized from "../pages/errors/NotAuthorized";

const AppRoutes = () => {

    const routes = [
        { path: "/", component: Launches },
        { path: "/404", component: NotFound },
        { path: "/403", component: NotAuthorized }
    ];

    return (
        <Container maxWidth="xl">
            <Routes>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={<route.component />}
                    />
                ))}
            </Routes>
        </Container>
    );
};

export default AppRoutes;