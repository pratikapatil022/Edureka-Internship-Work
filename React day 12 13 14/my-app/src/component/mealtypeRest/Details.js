import React, { Component } from 'react';
import axios from 'axios';
import DetailDisplay from './DetailsDisplay';
import CostFilter from '../Filter/costFilter';
import CusineFilter from '../Filter/cuisineFilter';

const restdetail = "http://localhost:4000/restaurantlist";
class Details extends Component {
    constructor(props) {
        super(props)

        this.state = {
            citiId: parseInt(sessionStorage.getItem('citiId')) ? parseInt(sessionStorage.getItem('citiId')) : 1,
            restlist: [],
        }
    }

    setDataPerCuisine(sortedData) {
        this.setState({ restlist: sortedData })
    }

    setDataPerCost(sortedData) {
        this.setState({ restlist: sortedData })
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <CusineFilter mealIdNumber={this.props.match.params.id} citiIdNo={this.state.citiId} restpercuisine={(data) => { this.setDataPerCuisine(data) }} />
                        <CostFilter restpercost={(data) => { this.setDataPerCost(data) }} mealIdNumber={this.props.match.params.id} citiIdNo={this.state.citiId} />
                    </div>
                    <div className="col-md-10">
                        <DetailDisplay restdata={this.state.restlist} />
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        sessionStorage.setItem('mealid', this.props.match.params.id)
        let mealid = parseInt(this.props.match.params.id)
        axios.get(`${restdetail}/${this.state.citiId}/${mealid}`)
            .then((response) => { this.setState({ restlist: response.data }) })
    }
}


export default Details;