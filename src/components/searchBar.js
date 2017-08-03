import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state ={term:''};
    }
    
    onInputChange(e){
        this.setState({ term: e.target.value });
        this.props.onVideoSearch(this.state.term);
    }

    render(){
        return (
            <div className="search-bar">
                <input 
                value={this.state.term}
                onChange={this.onInputChange.bind(this)} />
            </div>
        );
    }
};

export default SearchBar;