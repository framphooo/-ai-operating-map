"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Era {
  period: string
  title: string
  description: string
}

const eras: Era[] = [
  {
    period: "1950s–1970s",
    title: "Symbolic AI: Rules and Logic",
    description: "Early AI systems were built with hand-coded rules and symbolic logic. These systems could appear impressive in narrow domains, such as chess-playing programs, but they were brittle, expensive to maintain, and incapable of adapting when reality changed. Deep Blue's victory over Kasparov in 1997 was not a triumph of intelligence, but an example of brute force computation without learning.",
  },
  {
    period: "1980s–1990s",
    title: "Expert Systems and the Maintenance Wall",
    description: "As rule-based systems scaled by adding more rules, complexity exploded. These expert systems demonstrated strong performance in controlled environments, but had a strong dependency on human maintenance. When business conditions changed or edge cases appeared, these systems failed. The combinatorial explosion of real-world conditions made exhaustive rule-writing impossible.",
  },
  {
    period: "1990s–2010s",
    title: "Machine Learning: Pattern Recognition",
    description: "Instead of writing rules, engineers began feeding systems large amounts of data so they could detect patterns. This was progress, but incomplete. These systems still required heavy human involvement in labeling data and defining features. The intelligence remained narrow and task-specific—a system that excelled at image recognition could not reason about language.",
  },
  {
    period: "2012",
    title: "Inflection Point: Deep Learning + GPUs",
    description: "2012 marks the inflection point, and understanding why requires understanding hardware, not just algorithms. GPUs enabled massive parallel computation, which made deep neural networks viable at scale. These networks could learn hierarchical representations without engineers explicitly defining what those patterns should be. This was the beginning of the shift from programming to training.",
  },
  {
    period: "2017–Present",
    title: "Transformers + Generative Models",
    description: "The introduction of transformer architectures allowed models to understand relationships across entire contexts at once. This enabled language understanding, code generation, reasoning chains, and synthesis. These systems generate outputs probabilistically based on learned patterns, optimizing for plausibility rather than truth. This probabilistic nature sets up why grounding in real data and architectural constraints are needed for reliable operational use.",
  },
]

export default function HistoricalArc() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isSectionFullyVisible, setIsSectionFullyVisible] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    const section = sectionRef.current
    if (!container || !section) return

    // Use Intersection Observer to detect when section is fully visible/centered
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Section is active when it's mostly visible (at least 80% visible)
          // This ensures the section is centered/framed before horizontal scroll starts
          setIsSectionFullyVisible(entry.isIntersecting && entry.intersectionRatio >= 0.8)
        })
      },
      {
        threshold: [0, 0.5, 0.8, 1],
        rootMargin: "-5% 0px -5% 0px", // Small margin to ensure it's centered
      }
    )

    observer.observe(section)

    const handleWheel = (e: WheelEvent) => {
      if (!isSectionFullyVisible) return

      const scrollLeft = container.scrollLeft
      const scrollWidth = container.scrollWidth
      const clientWidth = container.clientWidth
      const maxScroll = scrollWidth - clientWidth
      const isAtEnd = scrollLeft >= maxScroll - 5
      const isAtStart = scrollLeft <= 5

      // Scrolling DOWN
      if (e.deltaY > 0) {
        // If at the end (5th card), allow normal vertical scroll to continue down
        if (isAtEnd) {
          return // Allow default vertical scroll
        }
        
        // Convert vertical scroll to horizontal (moving right through cards)
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          e.preventDefault()
          e.stopPropagation()
          container.scrollLeft += e.deltaY * 0.8
        }
      }
      // Scrolling UP
      else if (e.deltaY < 0) {
        // If at the start (1st card), allow normal vertical scroll to continue up
        if (isAtStart) {
          return // Allow default vertical scroll
        }
        
        // Convert vertical scroll to horizontal (moving left through cards)
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          e.preventDefault()
          e.stopPropagation()
          container.scrollLeft += e.deltaY * 0.8 // Negative deltaY will scroll left
        }
      }
    }

    // Add listener with capture phase to intercept early
    window.addEventListener("wheel", handleWheel, { passive: false, capture: true })

    return () => {
      observer.disconnect()
      window.removeEventListener("wheel", handleWheel, { capture: true })
    }
  }, [isSectionFullyVisible])

  return (
    <div className="w-full" ref={sectionRef}>
      {/* Title Section */}
      <div className="mb-16 md:mb-20 text-center max-w-4xl mx-auto px-6">
        <h5 className="text-xs uppercase tracking-wide text-accent mb-2">The Historical Arc</h5>
        <h2 className="mb-6 text-4xl md:text-5xl font-heading font-bold tracking-tight text-foreground">
          History of AI
        </h2>
        <p className="text-base md:text-lg text-secondary leading-relaxed">
          The evolution of artificial intelligence spans decades, marked by fundamental shifts in approach and capability. Understanding this history reveals why AI works now in ways it never could before.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute top-[120px] md:top-[140px] left-6 md:left-12 right-6 md:right-12 h-0.5 bg-accent/20 z-0" />

        {/* Horizontal Scroll Timeline */}
        <div
          ref={containerRef}
          className="overflow-x-auto overflow-y-hidden pb-16 md:pb-20 scrollbar-hide relative"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div className="inline-flex gap-8 md:gap-12 px-6 md:px-12" style={{ minWidth: "max-content" }}>
            {eras.map((era, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[85vw] md:w-[500px] lg:w-[600px] scroll-snap-align-start relative"
              >
                {/* Timeline Marker */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-4 h-4 rounded-full bg-accent border-4 border-white/40 shadow-lg" />
                </div>

                {/* Card */}
                <motion.div
                  className="mt-8 rounded-2xl border border-black/5 bg-white/90 backdrop-blur-sm shadow-xl p-6 md:p-8 lg:p-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Era Label */}
                  <div className="text-sm font-semibold text-accent mb-3 tracking-wide uppercase">
                    {era.period}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-6 leading-tight">
                    {era.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base md:text-lg text-secondary leading-relaxed">
                    {era.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

