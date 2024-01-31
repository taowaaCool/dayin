import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App as AntApp, ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import { routes } from "./routes/index";

let router: ReturnType<typeof createBrowserRouter>;

function App() {
  // const { count, inc } = useStore();
  router = createBrowserRouter(routes);

  return (
    <>
      <ConfigProvider locale={zhCN}>
        <AntApp>
          <RouterProvider router={router}></RouterProvider>
        </AntApp>
      </ConfigProvider>
    </>
  );
}

export default App;
