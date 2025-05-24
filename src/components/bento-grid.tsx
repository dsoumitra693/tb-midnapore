"use client";

import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { forwardRef, useState, useRef, useEffect, useCallback, memo } from "react";

// Enhanced types for better TypeScript support
interface MediaContent {
    type: "imageItem" | "videoItem";
    source: string;
    alt?: string;
    poster?: string;
    blurDataURL?: string; // For better loading experience
}

interface BentoGridProps {
    children?: React.ReactNode;
    className?: string;
    gap?: "sm" | "md" | "lg";
    maxWidth?: "6xl" | "7xl" | "none";
}

interface BentoGridItemProps {
    className?: string;
    title?: string | React.ReactNode;
    subtitle?: string;
    media?: MediaContent;
    icon?: React.ReactNode;
    span?: "1x1" | "1x2" | "2x1" | "2x2" | "2x3" | "3x2";
    onClick?: () => void;
    priority?: boolean;
    lazy?: boolean;
    category?: string;
    featured?: boolean;
}

// Enhanced intersection observer hook with better performance
function useIntersectionObserver(
    ref: React.RefObject<HTMLElement>,
    options?: IntersectionObserverInit
) {
    const [isInView, setIsInView] = useState(false);
    const [hasBeenInView, setHasBeenInView] = useState(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const inView = entry.isIntersecting;
                setIsInView(inView);
                if (inView) {
                    setHasBeenInView(true);
                }
            },
            {
                threshold: 0.25,
                rootMargin: '100px',
                ...options
            }
        );

        const currentElement = ref.current;
        observer.observe(currentElement);

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [ref, options]);

    return { isInView, hasBeenInView };
}

// Enhanced BentoGrid with more customization options
export const BentoGrid = memo<BentoGridProps>(({
    children,
    className = "",
    gap = "md",
    maxWidth = "7xl"
}) => {
    const gapClasses = {
        sm: "gap-2 sm:gap-3",
        md: "gap-3 sm:gap-4 lg:gap-6",
        lg: "gap-4 sm:gap-6 lg:gap-8"
    };

    const maxWidthClasses = {
        "6xl": "max-w-6xl",
        "7xl": "max-w-7xl",
        "none": "max-w-none"
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`
          mx-auto grid w-full ${maxWidthClasses[maxWidth]} ${gapClasses[gap]}
          grid-cols-2 auto-rows-[120px]
          sm:auto-rows-[140px] sm:grid-cols-3
          md:grid-cols-4 md:auto-rows-[160px]
          lg:auto-rows-[180px] lg:grid-cols-5
          xl:auto-rows-[200px] xl:grid-cols-6
          2xl:auto-rows-[220px]
          ${className}
        `}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
});

BentoGrid.displayName = "BentoGrid";

// Enhanced responsive span classes with more options
const spanClasses = {
    "1x1": "col-span-1 row-span-1",
    "1x2": "col-span-1 row-span-2",
    "2x1": "col-span-2 row-span-1 sm:col-span-2",
    "2x2": "col-span-2 row-span-2 sm:col-span-2 lg:col-span-2 lg:row-span-2",
    "2x3": "col-span-2 row-span-3 sm:col-span-2 lg:col-span-2 lg:row-span-3",
    "3x2": "col-span-2 row-span-2 sm:col-span-3 lg:col-span-3 lg:row-span-2",
};

// Enhanced BentoGridItem with better performance and features
export const BentoGridItem = memo(forwardRef<HTMLDivElement, BentoGridItemProps>(
    ({
        title,
        subtitle,
        media,
        icon,
        span = "1x1",
        onClick,
        priority = false,
        lazy = true,
        category,
        featured = false,
        className = ""
    }, ref) => {
        // State management
        const [isPressed, setIsPressed] = useState(false);
        const [mediaLoaded, setMediaLoaded] = useState(false);
        const [mediaError, setMediaError] = useState(false);
        const [isVideoPlaying, setIsVideoPlaying] = useState(false);
        const [userInteracted, setUserInteracted] = useState(false);
        const [isHovered, setIsHovered] = useState(false);

        // Refs
        const videoRef = useRef<HTMLVideoElement>(null);
        const containerRef = useRef<HTMLDivElement>(null);

        // Motion values for enhanced interactions
        const mouseX = useMotionValue(0);
        const mouseY = useMotionValue(0);
        const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
        const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

        // Intersection observer
        const { isInView, hasBeenInView } = useIntersectionObserver(containerRef, {
            threshold: 0.3
        });

        // Enhanced video handling with better error management
        const handleVideoPlayback = useCallback(async () => {
            if (!videoRef.current || media?.type !== 'videoItem') return;

            const video = videoRef.current;

            try {
                if (isInView && mediaLoaded && !userInteracted) {
                    await video.play();
                    setIsVideoPlaying(true);
                } else if (!isInView && !video.paused) {
                    video.pause();
                    setIsVideoPlaying(false);
                }
            } catch (error) {
                console.warn('Video playback failed:', error);
                setMediaError(true);
            }
        }, [isInView, media, mediaLoaded, userInteracted]);

        useEffect(() => {
            handleVideoPlayback();
        }, [handleVideoPlayback]);

        // Enhanced video event listeners with better cleanup
        useEffect(() => {
            const video = videoRef.current;
            if (!video || media?.type !== 'videoItem') return;

            const handlePlay = () => setIsVideoPlaying(true);
            const handlePause = () => setIsVideoPlaying(false);
            const handleEnded = () => {
                setIsVideoPlaying(false);
                setUserInteracted(false);
            };
            const handleError = () => setMediaError(true);
            const handleLoadStart = () => setMediaError(false);

            video.addEventListener('play', handlePlay);
            video.addEventListener('pause', handlePause);
            video.addEventListener('ended', handleEnded);
            video.addEventListener('error', handleError);
            video.addEventListener('loadstart', handleLoadStart);

            return () => {
                video.removeEventListener('play', handlePlay);
                video.removeEventListener('pause', handlePause);
                video.removeEventListener('ended', handleEnded);
                video.removeEventListener('error', handleError);
                video.removeEventListener('loadstart', handleLoadStart);
            };
        }, [media]);

        // Enhanced mouse interaction handlers
        const handleMouseMove = useCallback((e: React.MouseEvent) => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            mouseX.set(e.clientX - centerX);
            mouseY.set(e.clientY - centerY);
        }, [mouseX, mouseY]);

        const handleMouseEnter = useCallback(() => {
            setIsHovered(true);
        }, []);

        const handleMouseLeave = useCallback(() => {
            setIsHovered(false);
            mouseX.set(0);
            mouseY.set(0);
        }, [mouseX, mouseY]);

        // Enhanced touch handlers
        const handleTouchStart = useCallback(() => {
            setIsPressed(true);
        }, []);

        const handleTouchEnd = useCallback(() => {
            setIsPressed(false);
        }, []);

        // Enhanced click handler with video controls
        const handleClick = useCallback(async () => {
            if (media?.type === "videoItem" && videoRef.current) {
                setUserInteracted(true);

                try {
                    if (videoRef.current.paused) {
                        await videoRef.current.play();
                        setIsVideoPlaying(true);
                    } else {
                        videoRef.current.pause();
                        setIsVideoPlaying(false);
                    }
                } catch (error) {
                    console.warn('Manual video control failed:', error);
                    setMediaError(true);
                }
            }
            onClick?.();
        }, [media, onClick]);

        // Enhanced keyboard handler
        const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleClick();
            }
        }, [handleClick]);

        return (
            <motion.div
                ref={(node) => {
                    containerRef.current = node;
                    if (typeof ref === 'function') {
                        ref(node);
                    } else if (ref) {
                        ref.current = node;
                    }
                }}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{
                    opacity: hasBeenInView ? 1 : 0,
                    scale: hasBeenInView ? 1 : 0.9,
                    y: hasBeenInView ? 0 : 20
                }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                    rotateX: isHovered ? rotateX : 0,
                    rotateY: isHovered ? rotateY : 0,
                    transformPerspective: 1000
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    duration: 0.4
                }}
                className={`
          group/bento relative flex flex-col justify-between overflow-hidden 
          rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900
          shadow-lg hover:shadow-2xl hover:shadow-emerald-500/10
          cursor-pointer select-none
          transition-all duration-500 ease-out
          border border-gray-700/50 hover:border-emerald-500/30
          ${spanClasses[span]}
          ${featured ? 'ring-2 ring-emerald-500/30 shadow-emerald-500/20' : ''}
          ${isPressed ? 'scale-[0.98]' : ''}
          ${className}
        `}
                onClick={handleClick}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onKeyDown={handleKeyDown}
                role="button"
                tabIndex={0}
                aria-label={`${typeof title === 'string' ? title : 'Media item'}${category ? ` in ${category}` : ''}`}
                aria-describedby={subtitle ? `${id}-subtitle` : undefined}
            >
                {/* Enhanced media container */}
                <div className="relative h-full w-full overflow-hidden">
                    {media && (hasBeenInView || !lazy) ? (
                        media.type === "videoItem" ? (
                            <video
                                ref={videoRef}
                                src={media.source}
                                poster={media.poster}
                                className={`
                  h-full w-full object-cover transition-all duration-700 
                  group-hover/bento:scale-110
                  ${mediaError ? 'opacity-50' : 'opacity-100'}
                `}
                                muted
                                loop
                                playsInline
                                preload="metadata"
                                onLoadedData={() => setMediaLoaded(true)}
                                onCanPlay={() => setMediaLoaded(true)}
                                onError={() => setMediaError(true)}
                            />
                        ) : (
                            <Image
                                src={media.source}
                                alt={media.alt || "Travel memory"}
                                fill
                                priority={priority}
                                placeholder={media.blurDataURL ? 'blur' : 'empty'}
                                blurDataURL={media.blurDataURL}
                                className={`
                  object-cover transition-all duration-700 
                  group-hover/bento:scale-110
                  ${mediaLoaded ? 'opacity-100' : 'opacity-0'}
                  ${mediaError ? 'opacity-50' : ''}
                `}
                                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                                onLoad={() => setMediaLoaded(true)}
                                onError={() => setMediaError(true)}
                            />
                        )
                    ) : (
                        <div className="h-full w-full bg-gradient-to-br from-gray-700 to-gray-800 animate-pulse" />
                    )}

                    {/* Enhanced loading state */}
                    {!mediaLoaded && !mediaError && (
                        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                            <div className="relative">
                                <div className="w-8 h-8 border-2 border-emerald-400/30 border-t-emerald-400 rounded-full animate-spin" />
                                <div className="absolute inset-0 w-8 h-8 border-2 border-emerald-400/10 rounded-full animate-pulse" />
                            </div>
                        </div>
                    )}

                    {/* Error state */}
                    {mediaError && (
                        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                            <div className="text-gray-400 text-center">
                                <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                <p className="text-xs">Failed to load</p>
                            </div>
                        </div>
                    )}

                    {/* Enhanced gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/20 to-transparent opacity-80 group-hover/bento:opacity-70 transition-all duration-500" />

                    {/* Category badge */}
                    {category && (
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="absolute top-3 left-3"
                        >
                            <span className="px-2 py-1 text-xs font-medium bg-emerald-600/90 text-white rounded-full backdrop-blur-sm">
                                {category}
                            </span>
                        </motion.div>
                    )}

                    {/* Enhanced video controls */}
                    {media?.type === "videoItem" && (
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="absolute top-3 right-3"
                        >
                            <div className="rounded-full bg-black/60 p-2 backdrop-blur-sm border border-white/10">
                                {isVideoPlaying ? (
                                    <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                                    </svg>
                                ) : (
                                    <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                )}
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Enhanced content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 lg:p-6">
                    {icon && (
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="mb-3 text-emerald-400 flex-shrink-0"
                        >
                            {icon}
                        </motion.div>
                    )}

                    {title && (
                        <motion.h3
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="
                font-bold text-white text-sm sm:text-base lg:text-lg xl:text-xl
                line-clamp-2 leading-tight mb-1
                transition-all duration-300 
                group-hover/bento:text-emerald-300
              "
                        >
                            {title}
                        </motion.h3>
                    )}

                    {subtitle && (
                        <motion.p
                            id={`${id}-subtitle`}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-gray-300 text-xs sm:text-sm line-clamp-1 opacity-80"
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </div>

                {/* Enhanced border effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-500 group-hover/bento:border-emerald-400/50 group-active/bento:border-emerald-400/70" />

                {/* Enhanced ripple effect */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    {isPressed && (
                        <motion.div
                            initial={{ scale: 0, opacity: 0.6 }}
                            animate={{ scale: 6, opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/40"
                        />
                    )}
                </div>

                {/* Featured indicator */}
                {featured && (
                    <div className="absolute top-2 left-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    </div>
                )}
            </motion.div>
        );
    }
));


