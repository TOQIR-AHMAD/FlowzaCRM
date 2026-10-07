import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const RtlLayout = lazy(() => import("layouts/rtl"));
const AdminLayout = lazy(() => import("layouts/admin"));
const AuthLayout = lazy(() => import("layouts/auth"));

const App = () => {
  return (
    <Suspense fallback={<div className="p-6">Loading dashboard…</div>}>
      <Routes>
        <Route path="auth/*" element={<AuthLayout />} />
        <Route path="admin/*" element={<AdminLayout />} />
        <Route path="rtl/*" element={<RtlLayout />} />
        <Route path="/" element={<Navigate to="/admin" replace />} />
      </Routes>
    </Suspense>
  );
};

export default App;
