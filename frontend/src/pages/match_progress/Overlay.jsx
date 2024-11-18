import MatchCard from "./components/MatchCard"
import ScoreBar from "./components/ScoreBar"

export default function Overlay() {
    const matchCards = Array.from({length: 5})

    return (
        <div className="h-screen flex flex-col">
            <div className="border-2 border-red-600 h-28">
                <ScoreBar/>
            </div>
            <div className="flex flex-1 space-x-4 px-2 pt-20 pb-8">
                {matchCards.map((_, index) =>(
                    <MatchCard key={index}></MatchCard>
                ))}
            </div>
        </div>
    )
}