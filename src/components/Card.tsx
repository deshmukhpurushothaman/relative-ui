import numberWithCommas from '../utils/formatNumber';

interface Props {
    coinData: any
}
const Card = ({ coinData }: Props) => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-[110px] h-[110px] rounded-full dark:bg-slate-800 p-12 border-solid border-[#0f172a] border-8 z-10 flex flex-col items-center justify-center relative">
                <div className="w-[60px] h-[60px] rounded-full">
                    <img src={coinData.coinImage} alt="BTC" className="rounded-full" />
                </div>
            </div>
            <div className="md:flex max-w-sm w-[250px] flex flex-col items-center bg-slate-100 rounded-2xl p-8 md:p-0 bg-gradient-to-b from-[#1e293b] to-[#0f172a] absolute top-[240px] opacity-95">
                <div className="pt-6 md:p-4 text-center md:text-left space-y-4 mt-10 flex flex-col items-center">
                    <div className="text-slate-700 dark:text-slate-500 flex flex-col items-center">{coinData.name}</div>
                    <div className="text-white dark:bg-slate-900 rounded-[30px] p-2 flex justify-between text-right w-[200px]">
                        <div></div>
                        <div>${numberWithCommas(coinData.increasedPrize)}</div>
                        {coinData.increasedPercentage > 0 ? (
                            <div className="text-lime-600">+{coinData.increasedPercentage}%</div>
                        ) : (
                            <div className="text-red-600">{coinData.increasedPercentage}%</div>
                        )}
                    </div>
                    <div className="text-slate-700 dark:text-slate-500 flex flex-col items-center">Prize</div>
                    <div className="text-white dark:bg-slate-900 rounded-[30px] p-2 flex flex-col items-center w-[200px]">
                        <div>${coinData.prize}</div>
                    </div>
                    <div className="text-slate-700 dark:text-slate-500 flex flex-col items-center">TVL</div>
                    <div className="text-white dark:bg-slate-900 rounded-[30px] p-1 pl-4 pr-4 flex justify-between w-[150px]">
                        {coinData.popularPairs.map((image: string, i: any) => (
                            <img src={image} alt="BTC" className="w-[30px] h-[30px] rounded-full object-contain" />
                        ))}
                    </div>
                    <div className="text-slate-700 dark:text-slate-500 flex flex-col items-center">Popular pairs</div>
                </div>
            </div>
        </div>
    )
}

export default Card;