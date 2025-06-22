import Header from './Header';
import GameGrid from './GameGrid';
import Footer from './Footer';

export default function Page()
{
    return (
        <div className = "page">
            <div className = "main-content">
                <Header />
                <GameGrid />
                <Footer />
            </div>
            
        </div>
    );
}