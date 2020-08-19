import React from 'react';
import Search from './Search';
import Footer from './Footer';
import QuickSearch from './QuickSearch';

//functional Component
const Home = (props) => {

    const handleRestaurent = (data) => {
        props.history.push(`/rest/${data}`)
    }

    return (
        <div>
            <Search restid={(data) => { handleRestaurent(data) }} />
            <QuickSearch />
            <hr />
            <Footer year="2020" month="August" />
        </div>
    )
}

export default Home;