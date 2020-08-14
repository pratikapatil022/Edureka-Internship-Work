import React from 'react';
import Search from './Search';
import Footer from './Footer';
import QuickSearch from './QuickSearch';

// This Is A functional Component
const Home = () => {
    return (
        <div>
            <Search />
            <QuickSearch />
            <hr />
            <Footer year="2020" month="july" />
        </div>
    )
}

export default Home;
