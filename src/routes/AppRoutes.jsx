import { Routes, Route } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ProjectDetails from "../components/projects/ProjectDetails";
import Project from "../pages/Project";
import Skills from "../pages/Skills";
import Contact from "../components/home/Contact";


const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route  path="/" element={<Home />} />
                <Route  path="/projects" element={<Project />} />
                <Route  path="/projects/:projectId" element={<ProjectDetails />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;