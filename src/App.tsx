import { useState } from 'react';
import styles from './App.module.scss';
import { Menu } from './components/menu/menu';
import { Container } from './components/container/container';
import { Favorite } from './components/favorite/favorite';
import Menu_module from './components/menu/menu.module.scss';
import Container_module from './components/container/container.module.scss';
import Favorite_module from './components/favorite/favorite.module.scss';
import { FavoriteContextProvider } from './context/FavoriteContext';
import { SearchContextProvider } from './context/SearchContext';

function App() {
    return (
        <div className={styles.App}>
            <SearchContextProvider>
            <Menu className={Menu_module.menu} />
            <FavoriteContextProvider>
                <Container className={Container_module.container} />
                <Favorite className={Favorite_module.favorite} />
            </FavoriteContextProvider>
            </SearchContextProvider>
        </div>
    );
}

export default App;
