"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Era {
  period: string
  title: string
  icon: string
  intro: string
  bullets: string[]
}

const eras: Era[] = [
  {
    period: "1950s–1970s",
    title: "Symbolic AI: Rules and Logic",
    icon: "🧠",
    intro: "Early AI was hand-written rules.",
    bullets: [
      "Engineers wrote every if/then by hand.",
      "Worked for board games; broke in messy reality.",
      "Nothing learned—people had to add new rules.",
      "Costs ballooned as the rule pile grew.",
    ],
  },
  {
    period: "1980s–1990s",
    title: "Expert Systems: The Maintenance Wall",
    icon: "🧰",
    intro: "Rule piles turned into upkeep debt.",
    bullets: [
      "Experts talked; coders turned steps into rules.",
      "Edge cases exploded faster than updates.",
      "Systems snapped when business logic shifted.",
      "High upkeep for narrow wins.",
    ],
  },
  {
    period: "1990s–2010s",
    title: "Machine Learning: Pattern Recognition",
    icon: "📈",
    intro: "Data began to replace hand-written rules.",
    bullets: [
      "Models learned patterns from labeled examples.",
      "People still crafted features by hand.",
      "Good at one task at a time.",
      "Fails when new data looks different from training.",
    ],
  },
  {
    period: "2012",
    title: "Deep Learning + GPUs",
    icon: "⚡",
    intro: "GPUs made deep nets train fast.",
    bullets: [
      "Thousands of cores train millions of weights quickly.",
      "Networks learn their own features.",
      "ImageNet gains showed scale beats tiny tweaks.",
      "Shift from coding rules to training behavior.",
    ],
  },
  {
    period: "2017–Present",
    title: "Transformers & Generative Models",
    icon: "🌐",
    intro: "Transformers read whole contexts at once.",
    bullets: [
      "One architecture adapts to many tasks.",
      "Generates answers by guessing likely next words.",
      "Sounds confident but can be wrong.",
      "Needs real data grounding to stay accurate.",
    ],
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
                  <div className="flex flex-col items-start gap-1 text-sm font-semibold text-accent mb-3 tracking-wide uppercase">
                    <span className="text-3xl leading-none">{era.icon}</span>
                    <span>{era.period}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-6 leading-tight">
                    {era.title}
                  </h3>

                  {/* Intro + bullets */}
                  <p className="text-base md:text-lg text-secondary leading-relaxed mb-3">
                    {era.intro}
                  </p>
                  <ul className="space-y-2 text-sm md:text-base text-secondary leading-relaxed list-disc list-inside">
                    {era.bullets.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
