import { Route, Routes } from "react-router-dom";
import LoginPage from "@/pages/login-page";
import RegisterPage from "@/pages/register-page";
import NotFoundPage from "@/pages/not-found-page";
import HomePage from "@/pages/home-page";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<HomePage />} />
      {/* <Route element={<AnonymousRoutes />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route path="/archives" element={<ArchivedNotes />} />
        <Route path="/note/new" element={<CreateNotes />} />
        <Route path="/notes/:id" element={<ShowNotes />} />
      </Route> */}
    </Routes>
  );
};

export default AppRoute;
