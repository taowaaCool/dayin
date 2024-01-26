import "./App.css";
import useStore from "./stores/useStores";
import { Card, Col, Row, Tooltip } from "antd";

function App() {
  const { count, inc } = useStore();

  return (
    <>
      <h1>Front</h1>
      <Card title="Title">I'm card.</Card>
      <Row>
        <Col>
          <Tooltip title="提示">
            <div>提示</div>
          </Tooltip>
        </Col>
      </Row>
      <div className="card">
        <button onClick={inc}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
