import React from 'react';
import {withRouter} from 'react-router-dom';


export class SearchInput extends React.Component {

    constructor(...args) {
        super(...args);
        this.state= {value:''}
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div>
            <input type="search" value={this.state.value} ref='searchInput' className="search-input" onChange={this.handleChange.bind(this)} />
            <button type="submit" className="search-button" onClick={() => {
            console.log(this.refs);
            let searchQuery = this.refs.searchInput.value;
            this.props.history.push('/video'+ searchQuery);
             }}
    >
        Search
        </button>
                </div>
        )
    }
}