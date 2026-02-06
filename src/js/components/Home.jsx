import { Navbar } from './Navbar';
import { Jumbotron } from './Jumbotron';
import { Footer } from './Footer';
import { Cards } from './cards/Cards';

//create your first component
const Home = () => {
    return (
        <div>
            <Navbar />
            <Jumbotron />
            <Cards />
            <Footer />
        </div>
    );
};

export default Home;
