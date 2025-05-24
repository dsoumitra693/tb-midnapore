"use client";

import { constructTripShareMsg } from "@/utils";
import { Trip } from "@/types";
import { ShareIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function ShareBtn({ trip }: { trip: Trip }) {
    const shareMsg = constructTripShareMsg(trip);
    const shareUrl = `https://travelbuddiesmidnapore.in/home/trips/${trip._id}`;

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: trip.title,
                    text: shareMsg,
                    url: shareUrl,
                });
            } catch (err) {
                console.error("Share failed:", err);
            }
        } else {
            alert("Native sharing not supported on this device. Use WhatsApp, email, or copy instead.");
        }
    };

    return (
        <div className="fixed bottom-20 right-6 md:static md:mt-8 md:flex md:justify-center space-y-3 md:space-y-0 md:space-x-4 flex flex-col md:flex-row items-center">
            <motion.button
                className="inline-flex items-center bg-emerald-500 hover:bg-emerald-600 text-white font-medium p-3 px-6 rounded-lg shadow-md transition-all duration-200 gap-3"
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={handleShare}
            >
                <ShareIcon className="w-5 h-5" />
                <span>Share</span>
            </motion.button>
        </div>
    );
}
