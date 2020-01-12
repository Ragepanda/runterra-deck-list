import React from "react";
import "./SearchBar.css"

class SearchBar extends React.Component {

    constructor(props) {
        super(props); // ✅ We passed props
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            searchText: ""
        };
        this.setSearch = this.setSearch.bind(this);
    }

    componentDidMount() {
        console.log("Search bar found");
    }

    setSearch(e) {
        this.setState({ searchText: e.target.value });
        console.log(this.state.searchText);
    }

    render() {

        return(
        <div class="row justify-content-center">
            <form >
                <div class = "col-8">
                        <input className="text" type="text" name="cardSearch" placeholder="Search Cards..." value={this.state.searchText} onChange={this.setSearch} />                    
                </div>
            </form>
        </div>
        )
    }
}
export default SearchBar;