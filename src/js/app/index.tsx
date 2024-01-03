import { FC } from 'react';
import Repin from '../../img/repin.jpg';
import { Button } from '../shared/ui';

const App: FC = () => (
  <>
    Hello World!
    <img src={Repin} alt="text" />
    <Button>Кнопка</Button>
  </>
);

export default App;
