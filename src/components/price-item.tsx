import { CurrencyRupeeIcon } from '@heroicons/react/24/outline';
import MotionDiv from './motion-div'

export default function PriceItem({ originalPrice, currentPrice }: {
    originalPrice: number,
    currentPrice: number
}) {
    const discount = originalPrice > currentPrice;

    return (
        <MotionDiv
            className="flex items-center gap-4 p-3 bg-gray-800/40 backdrop-blur-md border border-white/5 rounded-xl shadow-lg"
            whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.2 }}
        >
            <div className="p-3 bg-emerald-400/10 rounded-lg backdrop-blur-sm shadow-inner ring-1 ring-emerald-400/20">
                <CurrencyRupeeIcon className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="flex flex-col">
                <span className="text-2xl font-bold text-emerald-400">₹{currentPrice.toLocaleString()}</span>
                {discount && (
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400 line-through">₹{originalPrice.toLocaleString()}</span>
                        <span className="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded-full">
                            Save ₹{(originalPrice - currentPrice).toLocaleString()}
                        </span>
                    </div>
                )}
            </div>
        </MotionDiv>
    )
}