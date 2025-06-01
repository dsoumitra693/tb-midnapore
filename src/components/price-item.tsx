"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { CurrencyRupeeIcon, UserGroupIcon} from '@heroicons/react/24/outline';
import MotionDiv from './motion-div'
import { PriceTier } from '@/types';

interface PriceItemProps {
  priceTiers: PriceTier[];
  selectedTier?: number;
}

export default function PriceItem({ priceTiers, selectedTier = 0}: PriceItemProps) {
  const searchParams = useSearchParams();
  const [selected, setSelected] = useState(selectedTier);
  const [,setShowDropdown] = useState(false);

  useEffect(() => {
    const tierParam = searchParams.get('tier');
    if (tierParam) {
      const tierIndex = parseInt(tierParam, 10);
      if (!isNaN(tierIndex) && tierIndex >= 0 && tierIndex < priceTiers.length) {
        setSelected(tierIndex);
      }
    }
  }, [searchParams, priceTiers.length]);

  console.log("Selected tier:", priceTiers);
  const currentTier = priceTiers[selected];
  const hasDiscount = currentTier?.originalPrice && currentTier.originalPrice > currentTier.currentPrice;

  const updateTier = (newIndex: number) => {
    setSelected(newIndex);
    setShowDropdown(false);
    
    // Update query param without page refresh
    const url = new URL(window.location.href);
    url.searchParams.set('tier', newIndex.toString());
    window.history.replaceState(null, '', url.toString());
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newIndex = parseInt(e.target.value, 10);
    updateTier(newIndex);
  };

  return (
    <MotionDiv
      className="mt-3 flex flex-col gap-4 p-4 bg-gray-800/40 backdrop-blur-md border border-white/5 rounded-xl shadow-lg"
      whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.2 }}
    >
      {/* Price Tier Selector - Mobile Dropdown, Desktop Buttons */}
      {priceTiers.length > 1 && (
        <div className="flex flex-col gap-3">
          <span className="text-sm font-medium text-gray-300">Select group size:</span>
          
          {/* Mobile Dropdown */}
          <div className="block md:hidden">
            <select
              value={selected}
              onChange={handleSelectChange}
              className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                backgroundPosition: 'right 0.5rem center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '1.5em 1.5em',
                paddingRight: '2.5rem'
              }}
            >
              {priceTiers.map((tier, index) => (
                <option key={index} value={index}>
                  {tier.label} - ₹{tier.perPersonPrice.toLocaleString()}/person
                </option>
              ))}
            </select>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex flex-wrap gap-2">
            {priceTiers.map((tier, index) => (
              <button
                key={index}
                onClick={() => updateTier(index)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex-1 min-w-fit ${
                  selected === index
                    ? 'bg-emerald-500 text-white shadow-lg ring-1 ring-emerald-400'
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white'
                }`}
              >
                <div className="flex flex-col items-center gap-1">
                  <span>{tier.label}</span>
                  <span className="text-xs opacity-80">₹{tier.perPersonPrice.toLocaleString()}/person</span>
                </div>
              </button>
            ))}
          </div>

          {/* Alternative Custom Dropdown for Desktop (if you prefer) */}
          {/* <div className="relative hidden md:block">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-full flex items-center justify-between bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-sm text-white hover:bg-gray-600/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
            >
              <span>{priceTiers[selected].label} - ₹{priceTiers[selected].perPersonPrice.toLocaleString()}/person</span>
              <ChevronDownIcon className={`w-5 h-5 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
            </button>
            
            {showDropdown && (
              <div className="absolute z-10 w-full mt-1 bg-gray-800 border border-gray-600 rounded-lg shadow-lg overflow-hidden">
                {priceTiers.map((tier, index) => (
                  <button
                    key={index}
                    onClick={() => updateTier(index)}
                    className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-700 transition-colors ${
                      selected === index ? 'bg-emerald-600/20 text-emerald-300' : 'text-gray-300'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{tier.label}</span>
                      <span className="text-emerald-400">₹{tier.perPersonPrice.toLocaleString()}/person</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div> */}
        </div>
      )}

      {/* Selected Price Display */}
      <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg">
        <div className="p-3 bg-emerald-400/10 rounded-lg backdrop-blur-sm shadow-inner ring-1 ring-emerald-400/20">
          <CurrencyRupeeIcon className="w-6 h-6 text-emerald-400" />
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-emerald-400">
              ₹{currentTier?.currentPrice.toLocaleString()}
            </span>
            <span className="text-sm text-gray-400">total</span>
          </div>
          
          {hasDiscount && (
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-gray-400 line-through">
                ₹{currentTier.originalPrice!.toLocaleString()}
              </span>
              <span className="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded-full">
                Save ₹{(currentTier.originalPrice! - currentTier.currentPrice).toLocaleString()}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Per Person Breakdown */}
      <div className="flex items-center gap-4 p-4 bg-gray-700/20 rounded-lg">
        <div className="p-3 bg-emerald-400/10 rounded-lg backdrop-blur-sm shadow-inner ring-1 ring-emerald-400/20">
          <UserGroupIcon className="w-6 h-6 text-emerald-400" />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-semibold text-emerald-300">Per Person</span>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-emerald-400">
              ₹{currentTier.perPersonPrice.toLocaleString()}
            </span>
            <span className="text-sm text-gray-400">
              × {currentTier.peopleCount} {currentTier.peopleCount === 1 ? 'person' : 'people'}
            </span>
          </div>
        </div>
      </div>

      {/* Discount Badge */}
      {hasDiscount && (
        <div className="text-center">
          <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 border border-emerald-500/30 text-emerald-300 rounded-full text-sm font-medium">
            🎉 {Math.round(((currentTier.originalPrice! - currentTier.currentPrice) / currentTier.originalPrice!) * 100)}% Off Limited Time!
          </span>
        </div>
      )}
    </MotionDiv>
  )
}
