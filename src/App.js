import Collapse from "./components/Collapse";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Collapse collapsedLabel="Подсказка" expandedLabel="Скрыть">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at
          tortor id purus gravida viverra. Phasellus vitae magna sit amet lacus
          consequat gravida. Sed tortor dolor, pulvinar quis iaculis ut,
          consectetur vel augue. Pellentesque vulputate dui at porttitor
          aliquam. Mauris facilisis ullamcorper rutrum. Donec at hendrerit
          magna. Sed nec odio accumsan, interdum libero et, maximus metus.
          Aliquam erat volutpat. Curabitur non leo vel leo hendrerit feugiat.
          Nullam cursus ac ex non pulvinar. Nunc ultricies mi ut magna dignissim
          rutrum. Vivamus faucibus luctus fringilla. Nullam vel tortor lacinia,
          fringilla metus nec, semper leo.
        </p>
      </Collapse>
    </div>
  );
}

export default App;
