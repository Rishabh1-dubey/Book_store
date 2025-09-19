import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./pages/home/Footer";
import { Provider } from "react-redux";
import appStore from "./redux/store/appStore";
import { Toaster } from "sonner";
import Topbar from "./components/TopBar";
function App() {
  return (
    <Provider store={appStore}>
      <Toaster position="top-right" />
      <Topbar />
      <div className="max-w-screen-xl mx-auto">
        <Navbar />
        <main className="min-h-screen mx-auto  px-4 py-6 ">
          <Outlet />
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </Provider>
  );
}

export default App;
