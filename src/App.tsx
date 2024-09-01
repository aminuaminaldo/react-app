import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let places = ["India", "kerala", "america", "new york", "japan", "China"];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      <ListGroup
        items={places}
        heading="Places"
        onSelectedItem={handleSelectedItem}
      />
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hello <span>World!</span>
        </Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>Click Me</Button>
    </div>
  );
}

export default App;
