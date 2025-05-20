'use client'
import { motion, HTMLMotionProps } from 'framer-motion'
import React from 'react'

export default function MotionH3(props: HTMLMotionProps<'h3'>) {
  return <motion.h3 {...props} />
}
