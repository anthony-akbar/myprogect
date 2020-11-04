import React, {Component} from 'react';

const SearchText = 'Type here to search.';

const searchStyle = {
    fontSize: '25px'
};

class SearchPanel extends Component {
    render() {
        return (
            <input style={searchStyle} placeholder={SearchText} />
        );
    }
}

export default SearchPanel;