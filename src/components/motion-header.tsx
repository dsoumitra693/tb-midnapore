'use client'
import { motion, HTMLMotionProps } from 'framer-motion'
import React from 'react'

export default function MotionHeader(props: HTMLMotionProps<'header'>) {
  return <motion.header {...props} />
}
