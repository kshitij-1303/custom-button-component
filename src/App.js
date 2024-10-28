import { GoBell, GoDatabase } from "react-icons/go";
import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          <GoBell />
          HI there!
        </Button>
      </div>
      <div>
        <Button danger>Click me</Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          See more
        </Button>
      </div>
      <div>
        <Button primary>Buy now</Button>
      </div>
      <div>
        <Button secondary>Buy now</Button>
      </div>
    </div>
  );
}

export default App;
