import "./App.css";
import PageLayout from "./pages/layout/PageLayout";
import Navbar from "./pages/layout/Navbar";
import AppRoutes from "./components/AppRoutes";

function App() {
  return (
    <PageLayout>
      <Navbar />
      <AppRoutes />
    </PageLayout>
  );
}

export default App;
