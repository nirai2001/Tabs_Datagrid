import logo from './logo.svg';
import './App.css';
import CustomThemeTextField from './tabs';
import DataGridWithDrawer from './Components/Datagrid';
const tabData = [
  { label: "Fields" },
  { label: "1:N"},
  { label: "N:N"},
  { label: "Forms" },
  { label: "Views" }

];
function App() {
  return (
    <>
      <p>Tabs</p>
      <CustomThemeTextField tabData={tabData} />
      <p>Datagrid</p>
      <DataGridWithDrawer />
    </>
  );
}

export default App;
