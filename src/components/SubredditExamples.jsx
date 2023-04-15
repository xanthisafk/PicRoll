import SubredditCard from './SubredditCard';
import examples from '../data/exampleData.json';

const SubredditExamples = () => {
  return (
    <>
    {examples.map((sub, index) => {
    return (
      <SubredditCard
        key={index}
        data={sub}
      />
    );
  })}
  </>
  )
}

export default SubredditExamples