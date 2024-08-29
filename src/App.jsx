import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Login from "./components/private/Login";
import Register from "./pages/Register";
import LoginPage from "./pages/private/HomePage";
import NoteFound from "./pages/NoteFound";
import ProtectedRoute from "./components/private/ProtectedRoute";
import PersonalInfoPage from "./pages/private/PersonalInfoPage";
import EditPersonalInfoPage from "./pages/private/EditPersonalInfoPage";
import AddPersonalInfo from "./pages/private/AddPersonalInfo";
import Achievements from "./pages/private/AchievementsPage";
import AddAchievement from "./pages/private/AddAchievement";
import EditAchievement from "./pages/private/EditAchievement";
import EducationPage from "./pages/private/EducationPage";
import AddEducationPage from "./pages/private/AddEducationPage";
import EditEducationPage from "./pages/private/EditEducationPage";
import ExperiancePage from "./pages/private/ExperiancePage";
import AddExperiancePage from "./pages/private/AddExperiancePage";
import EditExperiancePage from "./pages/private/EditExperiancePage";
import HomePage from "./pages/private/HomePage";
import SocialLinksPage from "./pages/private/SocialLinksPage";
import AddSocialLinkPage from "./pages/private/AddSocialLinkPage";
import EditSocialLinkPage from "./pages/private/EditSocialLinkPage";
import ColorPickerPage from "./pages/private/ColorPickerPage";
import SkillsPage from "./pages/private/SkillsPage";
import AddSkillPage from "./pages/private/AddSkillPage";
import EditSkillPage from "./pages/private/EditSkillPage";
import Index from "./pages/public/Index";
import ImageGallery from "./pages/public/ImageGallery";
import MessagesPage from "./pages/private/MessagesPage";
import ImageUpload from "./pages/private/ImageUpload";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}
function App() {
  const mainPath = "/admin-backend";
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Index />} />
        <Route path="/index" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        {/* Private Route */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route
            path="/register"
            element={
              <ProtectedRoute>
                <NoteFound />
              </ProtectedRoute>
            }
          />
          <Route
            path={mainPath}
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path={`${mainPath}/index`}
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path={`${mainPath}/personal-info`}
            element={
              <ProtectedRoute>
                <PersonalInfoPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-backend/personal-info/add"
            element={
              <ProtectedRoute>
                <AddPersonalInfo />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-backend/personal-info/edit/:id"
            element={
              <ProtectedRoute>
                <EditPersonalInfoPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-backend/achievements"
            element={
              <ProtectedRoute>
                <Achievements />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-backend/achievements/add"
            element={
              <ProtectedRoute>
                <AddAchievement />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin-backend/achievements/update/:id"
            element={
              <ProtectedRoute>
                <EditAchievement />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin-backend/education"
            element={
              <ProtectedRoute>
                <EducationPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin-backend/education/add"
            element={
              <ProtectedRoute>
                <AddEducationPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin-backend/education/edit/:id"
            element={
              <ProtectedRoute>
                <EditEducationPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin-backend/experiance"
            element={
              <ProtectedRoute>
                <ExperiancePage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin-backend/experiance/add"
            element={
              <ProtectedRoute>
                <AddExperiancePage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin-backend/experiance/edit/:id"
            element={
              <ProtectedRoute>
                <EditExperiancePage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin-backend/social-links"
            element={
              <ProtectedRoute>
                <SocialLinksPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin-backend/social-links/add"
            element={
              <ProtectedRoute>
                <AddSocialLinkPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin-backend/social-links/edit/:id"
            element={
              <ProtectedRoute>
                <EditSocialLinkPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-backend/color-picker"
            element={
              <ProtectedRoute>
                <ColorPickerPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin-backend/skills"
            element={
              <ProtectedRoute>
                <SkillsPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin-backend/skills/add"
            element={
              <ProtectedRoute>
                <AddSkillPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin-backend/skills/edit/:id"
            element={
              <ProtectedRoute>
                <EditSkillPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-backend/gallery"
            element={
              <ProtectedRoute>
                <ImageUpload />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-backend/messages"
            element={
              <ProtectedRoute>
                <MessagesPage />
              </ProtectedRoute>
            }
          />

          <Route path="/admin-backend/*" element={<NoteFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
