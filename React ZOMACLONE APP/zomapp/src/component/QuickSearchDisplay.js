import React from 'react';
import { Link } from 'react-router-dom';
import './QuickSearchDisplay.css';

const DisplaySearch = (props) => {

    const listMeal = ({ mealData }) => {
        if (mealData) {
            return mealData.map((item) => {
                return (
                    <Link to={`/details/${item.mealtype}`}>
                        <div className="tileContainer">
                            <div className="tileComponent1">
                                <img src={`/images/${item.name}.png`} />
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading" style={{ textTransform: "uppercase" }}>
                                    {item.name}
                                </div>
                                <div className="componentSubHeading">
                                    Start your day with exclusive options
                                    </div>
                            </div>

                        </div>
                    </Link>
                )
            })
        }
    }

    return (
        <div>
            <div className="quickSearchContainer">
                <p className="quickSearchHeading">
                    Quick Search
                </p>
                <p className="quickSearchSubHeading">
                    Discover Reastaurants By Type Of Meal
                </p>
                {listMeal(props)}
            </div>
        </div>
    )
}

export default DisplaySearch;