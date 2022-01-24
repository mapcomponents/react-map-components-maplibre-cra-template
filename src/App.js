import './App.css';
import {MapLibreMap} from "@mapcomponents/react-maplibre"

function App() {
  return (
      <MapLibreMap options={{
        zoom: 8,
        style: "https://wms.wheregroup.com/tileserver/style/osm-bright.json",
        center: [7.0851268, 50.73884]
      }} />
  );
}

export default App;
