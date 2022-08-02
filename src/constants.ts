import Bitcoin from './assets/bitcoin.png';
import Solana from './assets/solana.png';
import Ethereum from './assets/ethereum.png';
import Binance from './assets/binance.png';
import ShibaInu from './assets/shibainu.png'
const Data = [
    {
        name: "Bitcoin(BTC)",
        increasedPrize: "31812.90",
        increasedPercentage: +10,
        prize: 60000,
        popularPairs: [
            Solana, Ethereum, Binance
        ],
        coinImage: Bitcoin,
    },
    {
        name: "Solana(SOL)",
        increasedPrize: "32.83",
        increasedPercentage: -12.32,
        prize: 60000,
        popularPairs: [
            Bitcoin, Ethereum, Binance
        ],
        coinImage: Solana,
    },
    {
        name: "Ethereum(ETH)",
        increasedPrize: "1466.45",
        increasedPercentage: -11.93,
        prize: 60000,
        popularPairs: [
            Solana, Bitcoin, Binance
        ],
        coinImage: Ethereum,
    },
    {
        name: "Binance USD(BUSD)",
        increasedPrize: "1.00",
        increasedPercentage: +0.26,
        prize: 60000,
        popularPairs: [
            Solana, Ethereum, Binance
        ],
        coinImage: Binance,
    },
    {
        name: "Shiba Inu(SHIB)",
        increasedPrize: "0.00000001948",
        increasedPercentage: -8.1,
        prize: 60000,
        popularPairs: [
            Solana, Ethereum, Binance
        ],
        coinImage: ShibaInu,
    },
]

export default Data;