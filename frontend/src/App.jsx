import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./pages/home/Footer";
import { Provider } from "react-redux";
import appStore from "./redux/store/appStore";
import { Toaster } from "sonner";
function App() {
  return (
    <Provider store={appStore}>
       <Toaster position="top-right" />
      <div className="max-w-screen-xl mx-auto">
        <Navbar />
        <main className="min-h-screen mx-auto  px-4 py-6 ">
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Provider>
  );
}

export default App;
