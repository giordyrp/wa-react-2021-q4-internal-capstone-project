import GlobalStyle from '../../styles/GlobalStyle';
import Theme from '../../styles/Theme';
import Home from '../Home';
import * as Styled from './App.styled';

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Styled.App>
        <Home />
      </Styled.App>
    </Theme>
  );
}

export default App;
