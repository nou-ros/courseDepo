import  React from 'react';

class SearchBar extends React.Component{

    state = { term: '' };
    
    onInputChange = (event) => {
        // console.log(event.target.value);
        this.setState({ term: event.target.value })
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        //child to parent component
        this.props.onTermSearch(this.state.term);
    }

    render(){
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                        type='text' 
                        onChange={this.onInputChange}
                        value={this.state.term} 
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;