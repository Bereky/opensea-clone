import { Fragment } from 'react'
import { SearchProvider } from '../Context/SearchProvider';
import Header from './Header';

const App = () => {
    return ( 
        <SearchProvider>
            <Header />
        </SearchProvider>
     );
}
 
export default App;