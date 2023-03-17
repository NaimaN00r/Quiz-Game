import React from 'react';
import Featured from '../Featured/Featured';
import Banner from '../Pages/Banner/Banner';
import Category from '../Pages/Category/Category';
import Quiz from './Quiz/Quiz';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Featured></Featured>
            
        </div>
    );
};

export default Home;