import React from 'react';
import './Home.css';

function Home(){
    return(
        <div className='home'>
            <div className='intro'>
                <h1>Explore a range of food items</h1>
                <div className="srch_bar"></div>
            </div>

            <div className='browse'>
                <h1>Browse Categories</h1>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
            </div>

            <div className='pop_posters'>
                <h1>Popular Food Contibutors</h1>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
            </div>

            <div className='about'>
                <h1>About</h1>
                <div className=""></div>
                <div className=""></div>
            </div>

            <div className='tstmony'>
                <h1>Testimonials</h1>
                <div className=""></div>
                <div className=""></div>
            </div>

            <div className='theNumbers'>
                <h1>Our progress by the Numbers</h1>
                <div className=""></div>
                <div className=""></div>
            </div>

            <div className='creators'>
                <h1>Behind the Mission</h1>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
            </div>
        </div>
    )
}

export default Home