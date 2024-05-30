import './MatchBoard.scss';
import BubbleInfoTeam from '@components/BubbleInfoTeam/BubbleInfoTeam';
import PronosScores from '@components/PronosScores/PronosScores';
import InfosMatch from '@components/InfosMatch/InfosMatch';

export default function MatchBoard({}) {

  return (
    <div>
      <BubbleInfoTeam />
      <InfosMatch />
      <BubbleInfoTeam />
      <PronosScores />
    </div>
  );
}
