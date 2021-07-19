import { DepotSetup, Sidebar } from './components';
import { StyledApp } from './App.styled';
import "./styles.css";

const App = () => {
  return (
    <StyledApp>
      <Sidebar />
      <main>
        <DepotSetup />
      </main>
    </StyledApp>
  )
}

export default App;
