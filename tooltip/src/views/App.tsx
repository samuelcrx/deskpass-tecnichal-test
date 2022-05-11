import { Tooltip, Button } from 'components';
import 'styles/components.app.scss';

function App() {
  return (
    <div className="dc-app">
      <div className="dc-app-content">
        <h1>How to create a tooltip component</h1>
        <div className="dc-app-content--container">
          <Tooltip title="the title">
            <Button>Simple Title</Button>
          </Tooltip>
        </div>
        <div className="dc-app-content--container">
          <Tooltip title="the title" place="bottom">
            <Button>Bottom Tooltip</Button>
          </Tooltip>
        </div>
        <div className="dc-app-content--container">
          <Tooltip title="the title" place="right">
            <Button>Right Tooltip</Button>
          </Tooltip>
        </div>
        <div className="dc-app-content--container">
          <Tooltip title="the title" place="left">
            <Button>Left Tooltip</Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default App;
