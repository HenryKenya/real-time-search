import React from 'react';


class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            searchString: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            searchString: e.target.value
        })
    }
    render() {
        var libraries = this.props.items,
        searchString = this.state.searchString.trim().toLowerCase();

        if (searchString.length > 1) {
            libraries = libraries.filter(function (l) {
                return l.name.toLowerCase().match(searchString);
            })
        }
        return (
            <div className='main container'>
                <h4>real time  search application</h4>
                <div className='row'>
                    <form className='col s12'>
                        <div className='input-field col s12'>
                            <input type="text" id="search" value={this.state.searchString} onChange={this.handleChange} />
                            <label htmlFor="search">search</label>
                            <ul>
                                {libraries.map(function(l){
                                    return <li key={l.name}>{l.name} (<a href={l.url} target="_blank">{l.url}</a>)</li>
                                })}
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Search;