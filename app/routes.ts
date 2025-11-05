// https://reactrouter.com/start/framework/routing
import {
    type RouteConfig,
    route,
    index,
} from "@react-router/dev/routes";

export default [
    // Root index handles auth-based routing
    index("./routes/home.tsx"),
    
    // Login route
    route("login", "./routes/login.tsx"),
    
    // Dashboard routes (all protected)
    // route("skills", "./routes/dashboard/skills.tsx"),
    // route("projects", "./routes/dashboard/projects.tsx"),
    // route("modules", "./routes/dashboard/modules.tsx"),
] satisfies RouteConfig;

