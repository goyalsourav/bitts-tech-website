'use client'

import { motion } from 'framer-motion'

export function Hexagon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      className={className}
      fill="none"
    >
      <polygon
        points="50,4 92,27 92,73 50,96 8,73 8,27"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.5"
      />
    </svg>
  )
}

/** Soft floating glow blob — used sparingly as a subtle accent */
export function GlowOrb({
  className,
  delay = 0,
}: {
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      aria-hidden="true"
      className={className}
      animate={{ y: [0, -24, 0], scale: [1, 1.06, 1] }}
      transition={{
        duration: 9,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: 'easeInOut',
      }}
    />
  )
}

/** Animated curved arc lines that draw themselves into view */
export function ArcLines({ className }: { className?: string }) {
  const paths = [
    'M-50 200 C 200 40, 600 40, 900 220',
    'M-50 260 C 250 120, 650 120, 950 280',
    'M-50 320 C 300 200, 700 200, 1000 340',
  ]
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 900 400"
      preserveAspectRatio="none"
      className={className}
      fill="none"
    >
      {paths.map((d, i) => (
        <motion.path
          key={d}
          d={d}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.45 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: i * 0.25, ease: 'easeInOut' }}
        />
      ))}
    </svg>
  )
}

/** Abstract network of nodes connected by glowing lines */
export function NetworkLines({ className }: { className?: string }) {
  const nodes = [
    { x: 40, y: 60 },
    { x: 160, y: 30 },
    { x: 250, y: 120 },
    { x: 110, y: 170 },
    { x: 300, y: 50 },
    { x: 220, y: 210 },
  ]
  const edges = [
    [0, 1],
    [1, 2],
    [2, 4],
    [0, 3],
    [3, 5],
    [2, 5],
    [1, 4],
  ]
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 340 240"
      className={className}
      fill="none"
    >
      {edges.map(([a, b], i) => (
        <motion.line
          key={`${a}-${b}`}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="currentColor"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: i * 0.1 }}
        />
      ))}
      {nodes.map((n, i) => (
        <motion.circle
          key={`${n.x}-${n.y}`}
          cx={n.x}
          cy={n.y}
          r="4"
          fill="currentColor"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
        />
      ))}
    </svg>
  )
}
