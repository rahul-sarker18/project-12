import './App.css';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import router from './Components/Router/MainRouter';

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto">
       <RouterProvider router={router}></RouterProvider>

      <Toaster />
    </div>
  );
}

export default App;
