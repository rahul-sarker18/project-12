import './App.css';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import router from './Components/Router/MainRouter';
import { useContext } from 'react';
import { Authcontext } from './Components/Context/Usercontext';
import { useQuery } from '@tanstack/react-query';

function App() {
  const { user, setRoll } = useContext(Authcontext);

  const { data: users = [] } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://mobil-sarver.vercel.app/users?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="max-w-screen-2xl mx-auto lg:w-4/5">
      {users.map((m) => setRoll(m))}
       <RouterProvider router={router}></RouterProvider>

      <Toaster />
    </div>
  );
}

export default App;
