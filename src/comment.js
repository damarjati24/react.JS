import React, { Component } from "react";
import ReactDOM from "react-dom/client"; //DOM is Document Object Model
import { faker } from '@faker-js/faker';

class CommentGenerator extends Component { //untuk mengelola daftar komentar dan menghasilkan komentar-komentar baru saat komponen dimount ke DOM.
    constructor(props) { // metode konstruktor kelas yang akan dipanggil saat sebuah instance dari kelas CommentGenerator dibuat.
        super(props); //untuk memanggil konstruktor dari kelas induk (di sini, kelas Component)
        //membuat komponen memiliki state comments yang awalnya kosong.
        this.state = { 
            comments: []
        };
    }
    
    componentDidMount() {
        this.generateComments(30); //digunakan untuk menghasilkan komentar-komentar baru.
    }
    generateComments = (count) => {
        const comments = [];
        for (let i = 0; i < count; i++) {
            const timestamp = faker.date.past(); // Generate a random date
            comments.push({
                id: i,
                author: faker.person.fullName(),
                avatar: faker.image.avatar(),
                timestamp: timestamp.toLocaleString(), // Convert to string for display
                text: faker.word.words({ count: { min: 10, max: 50 } }),
                likes: 0
            });
        }
        this.setState({ comments });
    };

    handleLike = (commentId) => {
        this.setState(prevState => ({
            comments: prevState.comments.map(comment => {
                if (comment.id === commentId) {
                    return { ...comment, likes: comment.likes + 1 };
                }
                return comment;
            })
        }));
    };

    render() {
        return (
            <div className="ui container comments">
                {this.state.comments.map(comment => (
                    <div key={comment.id} className="comment">
                        <a href="/" className="avatar">
                            <img alt="avatar" src={comment.avatar}/>
                        </a>
                        <div className="content">
                            <a href="/" className="author">
                                {comment.author}
                            </a>
                            <div className="metadata">
                                <span className="data">{comment.timestamp}</span>
                            </div>
                            <span> Liked: {comment.likes}</span>
                            <div className="text">{comment.text}</div>
                            <div className="actions">
                                <button onClick={() => this.handleLike(comment.id)}> Click me </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
const el = document.getElementById("root");
// Tell react to take control of that element
const root = ReactDOM.createRoot(el);

// Create a component
// function App() {
//     return <input type="number" min={5} 
//     style={{ border: "3px solid" }} />;
    // Fungsi yang berisi nama dan pekerjaan
    // function Profile(name, job) {
    //     return (
    //         <div>
    //             <p>Nama Saya: {name}</p>
    //             <p>Pekerjaan Saya: {job}</p>
    //         </div>
    //     );
    // }

    // Memanggil fungsi profile dua kali dengan nama dan pekerjaan yang berbeda
    // return (
    //     <div>
    //         {Profile("Damar", "Developer")}
    //         {Profile("Damarjati", "Desainer")}
    //     </div>
    // );
    // const message = "Hi there!";
    // const data = {
    //     color: "red",
    // };
    // return <h1>{new Date().toLocaleTimeString()}</h1>;
    // const date = new Date();
    // const time = date.toLocaleTimeString();

    // return <h1>{time}</h1>;
// }
// root.render(<App commentCount={5} />);
root.render(<CommentGenerator />);
