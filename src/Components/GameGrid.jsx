import ThreeGrid from "./ThreeGrid";
import FiveGrid from "./FiveGrid";
import SevenGrid from "./SevenGrid";

export default function GameGrid()
{
    return (
        <div className = "game-grid">
            <ThreeGrid />
            <FiveGrid />
            <SevenGrid />
        </div>
    );
}