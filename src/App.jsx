import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./redux/store";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
      </Provider>
    </>
  );
}

export default App;
