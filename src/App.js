
import './App.css';
import { RouterProvider } from 'react-router';
import router from './Routes/Routes';


function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      {/* <Toaster></Toaster> */}
    </div>
  );
}

export default App;
