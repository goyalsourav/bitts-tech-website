'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

const offset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 32 },
  down: { x: 0, y: -32 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
}

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className,
  once = true,
}: {
  children: ReactNode
  direction?: Direction
  delay?: number
  className?: string
  once?: boolean
}) {
  const prefersReducedMotion = useReducedMotion()
  const { x, y } = offset[direction]
  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: prefersReducedMotion ? 0 : x,
      y: prefersReducedMotion ? 0 : y,
      filter: prefersReducedMotion ? 'blur(0px)' : 'blur(10px)',
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '-120px' }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerGroup({
  children,
  className,
  stagger = 0.12,
}: {
  children: ReactNode
  className?: string
  stagger?: number
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const prefersReducedMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          y: prefersReducedMotion ? 0 : 34,
          filter: prefersReducedMotion ? 'blur(0px)' : 'blur(10px)',
        },
        show: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration: 0.78, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
