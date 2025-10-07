import { Routes, Route } from "react-router-dom";
import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";
import Home from "./_root/pages/Home";

export default function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public routes */}
        <Route path="/sign-in" element={<SigninForm />} />
        <Route path="/sign-in" element={<SignupForm />} />

        {/* Privite routes */}
        <Route path="/*" element={<Home />} />
      </Routes>
    </main>
  )
}
