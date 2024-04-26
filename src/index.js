import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

const unsplash = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
        'Client-ID 2b98c1afb0aed3b3d94a1866bdc3ac013d21a0c86d236a0fee32355c331c0296',
    },
});

class SearchBar extends React.Component {
    state = { term: "" };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image search</label>
                        <input
                        type="text"
                        value={this.state.term}
                        onChange={(e) => this.setState({ term: e.target.value})}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.imageRefs = []; // initialize imageRefs as an empty array
    }

    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await unsplash.get("/search/photos", {
            params: { query: term },
        });

        this.setState({ images: response.data.results });
    };

    renderImages() {
        return this.state.images.map((image, index) => {
            this.imageRefs[index] = React.createRef(); // create a ref for each image
            return (
                <div key={image.id} className="column">
                    <img ref={this.imageRefs[index]} src={image.urls.small} alt={image.description} style={{ width: "100%", height: "auto" }} />
                </div>
            );
        });
    }

    componentDidMount() {
        this.adjustImageSizes();
        window.addEventListener('resize', this.adjustImageSizes);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.adjustImageSizes);
    }

    adjustImageSizes = () => {
        this.imageRefs.forEach((ref) => {
            if (ref.current) {
                const width = ref.current.offsetWidth;
                ref.current.style.height = `${width / 1.5}px`; // adjust height based on width (aspect ratio 3:2)
            }
        });
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <div className="ui segment">
                    <div className="ui stackable three column grid">
                        {this.renderImages()}
                    </div>
                </div>
            </div>
        );
    }
}

root.render(<App />)
