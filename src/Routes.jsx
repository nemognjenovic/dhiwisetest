import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const OnboardingDesktopFive = React.lazy(() =>
  import("pages/OnboardingDesktopFive")
);
const OnboardingDesktopFour = React.lazy(() =>
  import("pages/OnboardingDesktopFour")
);
const OnboardingDesktopThree = React.lazy(() =>
  import("pages/OnboardingDesktopThree")
);
const OnboardingDesktopTwo = React.lazy(() =>
  import("pages/OnboardingDesktopTwo")
);
const OnboardingDesktopOne = React.lazy(() =>
  import("pages/OnboardingDesktopOne")
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/onboardingdesktopone"
            element={<OnboardingDesktopOne />}
          />
          <Route
            path="/onboardingdesktoptwo"
            element={<OnboardingDesktopTwo />}
          />
          <Route
            path="/onboardingdesktopthree"
            element={<OnboardingDesktopThree />}
          />
          <Route
            path="/onboardingdesktopfour"
            element={<OnboardingDesktopFour />}
          />
          <Route
            path="/onboardingdesktopfive"
            element={<OnboardingDesktopFive />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
