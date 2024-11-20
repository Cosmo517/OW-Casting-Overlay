import MatchCard from "./components/MatchCard";
import ScoreBar from "./components/ScoreBar";

export default function Overlay({ matchData })
{
    return (
        <div className="h-screen flex flex-col bg-gray-900 text-white">
            {/* ScoreBar Section */}
            <div className="border-2 border-red-600 h-28">
                <ScoreBar />
            </div>
            {/* Match Cards Section */}
            <div className="flex flex-1 flex-wrap justify-center space-x-4 px-2 pt-20 pb-8">
                {matchData.length === 0 ? //if the are not matches show the message below
                (
                    <p>No matches available</p> //Show this fallback message if no match data is shown
                ) : 
                (
                    matchData.map((data, index) => (
                        <MatchCard
                            key={index} //index used for the key
                            game={data.game}//passing the game number to the match card
                            score={data.score}//passing the score to the match card
                            team={data.team}//passing the team name to the match card
                            map={data.map}//passing the map name to the match card
                        />
                    ))
                )}
            </div>
        </div>
    );
}
