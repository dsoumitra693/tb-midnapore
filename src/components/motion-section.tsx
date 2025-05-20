'use client'
import { motion, HTMLMotionProps } from 'framer-motion'
import React from 'react'

export default function MotionSection(props: HTMLMotionProps<'section'>) {
  return <motion.section {...props} />
}
