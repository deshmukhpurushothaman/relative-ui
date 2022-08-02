import Card from './components/Card';
import Data from './constants';

function App() {
  return (
    <div className="text-slate-500 bg-white dark:bg-slate-900 pl-[100px] pr-[100px] h-[700px] w-[100%]">
      <div className="pt-[100px] text-white font-bold text-2xl">Trending Assets</div>
      <div className="flex justify-between pt-[50px]">
        {Data.map((coin, i) => (
          <Card coinData={coin} />
        ))}
      </div>
    </div>
  );
}

export default App;
