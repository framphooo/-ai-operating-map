"use client"

import { useCallback, useEffect, useRef } from "react"

interface Vector2D {
  x: number
  y: number
}

class Particle {
  pos: Vector2D = { x: 0, y: 0 }
  vel: Vector2D = { x: 0, y: 0 }
  acc: Vector2D = { x: 0, y: 0 }
  target: Vector2D = { x: 0, y: 0 }

  closeEnoughTarget = 100
  maxSpeed = 1.0
  maxForce = 0.1
  particleSize = 10
  isKilled = false

  startColor = { r: 0, g: 0, b: 0 }
  targetColor = { r: 255, g: 255, b: 255 }
  colorWeight = 0
  colorBlendRate = 0.01

  move() {
    // Check if particle is close enough to its target to slow down
    let proximityMult = 1
    const distance = Math.sqrt(Math.pow(this.pos.x - this.target.x, 2) + Math.pow(this.pos.y - this.target.y, 2))

    if (distance < this.closeEnoughTarget) {
      proximityMult = distance / this.closeEnoughTarget
    }

    // Add force towards target
    const towardsTarget = {
      x: this.target.x - this.pos.x,
      y: this.target.y - this.pos.y,
    }

    const magnitude = Math.sqrt(towardsTarget.x * towardsTarget.x + towardsTarget.y * towardsTarget.y)
    if (magnitude > 0) {
      towardsTarget.x = (towardsTarget.x / magnitude) * this.maxSpeed * proximityMult
      towardsTarget.y = (towardsTarget.y / magnitude) * this.maxSpeed * proximityMult
    }

    const steer = {
      x: towardsTarget.x - this.vel.x,
      y: towardsTarget.y - this.vel.y,
    }

    const steerMagnitude = Math.sqrt(steer.x * steer.x + steer.y * steer.y)
    if (steerMagnitude > 0) {
      steer.x = (steer.x / steerMagnitude) * this.maxForce
      steer.y = (steer.y / steerMagnitude) * this.maxForce
    }

    this.acc.x += steer.x
    this.acc.y += steer.y

    // Move particle
    this.vel.x += this.acc.x
    this.vel.y += this.acc.y
    this.pos.x += this.vel.x
    this.pos.y += this.vel.y
    this.acc.x = 0
    this.acc.y = 0
  }

  draw(ctx: CanvasRenderingContext2D, drawAsPoints: boolean) {
    // Blend towards target color
    if (this.colorWeight < 1.0) {
      this.colorWeight = Math.min(this.colorWeight + this.colorBlendRate, 1.0)
    }

    // Calculate current color
    const currentColor = {
      r: Math.round(this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight),
      g: Math.round(this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight),
      b: Math.round(this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight),
    }

    if (drawAsPoints) {
      ctx.fillStyle = `rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b})`
      ctx.fillRect(this.pos.x, this.pos.y, 2, 2)
    } else {
      ctx.fillStyle = `rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b})`
      ctx.beginPath()
      ctx.arc(this.pos.x, this.pos.y, this.particleSize / 2, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  kill(width: number, height: number) {
    if (!this.isKilled) {
      // Set target outside the scene
      const randomPos = this.generateRandomPos(width / 2, height / 2, (width + height) / 2)
      this.target.x = randomPos.x
      this.target.y = randomPos.y

      // Begin blending color to black
      this.startColor = {
        r: this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight,
        g: this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight,
        b: this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight,
      }
      this.targetColor = { r: 0, g: 0, b: 0 }
      this.colorWeight = 0

      this.isKilled = true
    }
  }

  private generateRandomPos(x: number, y: number, mag: number): Vector2D {
    const randomX = Math.random() * 1000
    const randomY = Math.random() * 500

    const direction = {
      x: randomX - x,
      y: randomY - y,
    }

    const magnitude = Math.sqrt(direction.x * direction.x + direction.y * direction.y)
    if (magnitude > 0) {
      direction.x = (direction.x / magnitude) * mag
      direction.y = (direction.y / magnitude) * mag
    }

    return {
      x: x + direction.x,
      y: y + direction.y,
    }
  }
}

interface ParticleTextEffectProps {
  words?: string[]
  wordColors?: { [key: string]: { r: number; g: number; b: number } }
  width?: number
  height?: number
  className?: string
  fullBleed?: boolean
}

const DEFAULT_WORDS = ["AI", "ORIGINS"]

// Helper to convert hex to RGB
const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 255, g: 255, b: 255 }
}

// Generate color variations for gradient effect
const generateColorVariations = (
  baseColor: { r: number; g: number; b: number },
  count: number
): Array<{ r: number; g: number; b: number }> => {
  const variations: Array<{ r: number; g: number; b: number }> = []
  for (let i = 0; i < count; i++) {
    // Create subtle variations: lighter and darker shades
    const variation = Math.random() * 0.3 - 0.15 // -15% to +15% variation
    variations.push({
      r: Math.max(0, Math.min(255, baseColor.r + baseColor.r * variation)),
      g: Math.max(0, Math.min(255, baseColor.g + baseColor.g * variation)),
      b: Math.max(0, Math.min(255, baseColor.b + baseColor.b * variation)),
    })
  }
  return variations
}

export function ParticleTextEffect({ 
  words = DEFAULT_WORDS,
  wordColors,
  width,
  height,
  className = "",
  fullBleed = false
}: ParticleTextEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])
  const frameCountRef = useRef(0)
  const wordIndexRef = useRef(0)
  const wordsRef = useRef(words)
  const fullBleedRef = useRef(fullBleed)
  
  // Keep refs in sync with props
  useEffect(() => {
    wordsRef.current = words
    fullBleedRef.current = fullBleed
  }, [words, fullBleed])

  const pixelSteps = 6
  const drawAsPoints = true

  const generateRandomPos = (x: number, y: number, mag: number): Vector2D => {
    const randomX = Math.random() * 1000
    const randomY = Math.random() * 500

    const direction = {
      x: randomX - x,
      y: randomY - y,
    }

    const magnitude = Math.sqrt(direction.x * direction.x + direction.y * direction.y)
    if (magnitude > 0) {
      direction.x = (direction.x / magnitude) * mag
      direction.y = (direction.y / magnitude) * mag
    }

    return {
      x: x + direction.x,
      y: y + direction.y,
    }
  }

  const nextWord = useCallback((word: string, canvas: HTMLCanvasElement) => {
    // Create off-screen canvas for text rendering
    const offscreenCanvas = document.createElement("canvas")
    offscreenCanvas.width = canvas.width
    offscreenCanvas.height = canvas.height
    const offscreenCtx = offscreenCanvas.getContext("2d")!

    // Draw text
    offscreenCtx.fillStyle = "white"
    // Responsive font size based on canvas width - larger for full-bleed
    // Make ORIGINS slightly larger to match AI visual weight
    const isOrigins = word.toUpperCase() === "ORIGINS"
    const baseFontSize = fullBleedRef.current 
      ? Math.max(90, Math.min(200, canvas.width / (isOrigins ? 7.5 : 8)))
      : Math.max(60, Math.min(120, canvas.width / 10))
    offscreenCtx.font = `bold ${baseFontSize}px Arial`
    offscreenCtx.textAlign = "center"
    offscreenCtx.textBaseline = "middle"
    // Center text vertically in upper portion (around 35% from top) for full-bleed mode
    const textY = fullBleedRef.current ? canvas.height * 0.35 : canvas.height / 2
    offscreenCtx.fillText(word, canvas.width / 2, textY)

    const imageData = offscreenCtx.getImageData(0, 0, canvas.width, canvas.height)
    const pixels = imageData.data

    // Get color for this word (with gradient variations)
    let baseColor = { r: 255, g: 255, b: 255 } // default white
    if (wordColors && wordColors[word]) {
      baseColor = wordColors[word]
    }
    
    // Generate color variations for gradient effect
    const colorVariations = generateColorVariations(baseColor, 100)

    const particles = particlesRef.current
    let particleIndex = 0

    // Collect coordinates
    const coordsIndexes: number[] = []
    for (let i = 0; i < pixels.length; i += pixelSteps * 4) {
      coordsIndexes.push(i)
    }

    // Shuffle coordinates for fluid motion
    for (let i = coordsIndexes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[coordsIndexes[i], coordsIndexes[j]] = [coordsIndexes[j], coordsIndexes[i]]
    }

    for (const coordIndex of coordsIndexes) {
      const pixelIndex = coordIndex
      const alpha = pixels[pixelIndex + 3]

      if (alpha > 0) {
        const x = (pixelIndex / 4) % canvas.width
        const y = Math.floor(pixelIndex / 4 / canvas.width)

        let particle: Particle

        if (particleIndex < particles.length) {
          particle = particles[particleIndex]
          particle.isKilled = false
          particleIndex++
        } else {
          particle = new Particle()

          const randomPos = generateRandomPos(canvas.width / 2, canvas.height / 2, (canvas.width + canvas.height) / 2)
          particle.pos.x = randomPos.x
          particle.pos.y = randomPos.y

          particle.maxSpeed = Math.random() * 6 + 4
          particle.maxForce = particle.maxSpeed * 0.05
          particle.particleSize = Math.random() * 6 + 6
          particle.colorBlendRate = Math.random() * 0.0275 + 0.0025

          particles.push(particle)
        }

        // Set color transition with gradient variation
        const colorVariation = colorVariations[Math.floor(Math.random() * colorVariations.length)]
        particle.startColor = {
          r: particle.startColor.r + (particle.targetColor.r - particle.startColor.r) * particle.colorWeight,
          g: particle.startColor.g + (particle.targetColor.g - particle.startColor.g) * particle.colorWeight,
          b: particle.startColor.b + (particle.targetColor.b - particle.startColor.b) * particle.colorWeight,
        }
        particle.targetColor = colorVariation
        particle.colorWeight = 0

        particle.target.x = x
        particle.target.y = y
      }
    }

    // Kill remaining particles
    for (let i = particleIndex; i < particles.length; i++) {
      particles[i].kill(canvas.width, canvas.height)
    }
  }, [wordColors])

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")!
    const particles = particlesRef.current

    // Background with motion blur
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Update and draw particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const particle = particles[i]
      particle.move()
      particle.draw(ctx, drawAsPoints)

      // Remove dead particles that are out of bounds
      if (particle.isKilled) {
        if (
          particle.pos.x < 0 ||
          particle.pos.x > canvas.width ||
          particle.pos.y < 0 ||
          particle.pos.y > canvas.height
        ) {
          particles.splice(i, 1)
        }
      }
    }

    // Auto-advance words (240 frames at 60fps = 4 seconds)
    frameCountRef.current++
    if (frameCountRef.current % 240 === 0) {
      const currentWords = wordsRef.current
      wordIndexRef.current = (wordIndexRef.current + 1) % currentWords.length
      nextWord(currentWords[wordIndexRef.current], canvas)
    }

    animationRef.current = requestAnimationFrame(animate)
  }, [drawAsPoints, nextWord])

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    let canvasWidth: number
    let canvasHeight: number
    
    if (fullBleedRef.current) {
      // Full viewport width and height - particles flow throughout entire hero
      canvasWidth = window.innerWidth
      const vh = window.innerHeight
      canvasHeight = height || Math.floor(vh * 0.85) // 85vh - covers title and paragraphs area
    } else {
      const containerWidth = container.clientWidth
      canvasWidth = containerWidth
      canvasHeight = height || Math.max(300, Math.min(500, containerWidth * 0.4))
    }

    // Set actual canvas size
    canvas.width = canvasWidth
    canvas.height = canvasHeight

    // Re-initialize with current word
    const currentWords = wordsRef.current
    nextWord(currentWords[wordIndexRef.current], canvas)
  }, [height, nextWord])

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    // Ensure wordsRef is up to date
    wordsRef.current = words
    
    // Initial resize (this will also initialize the first word)
    resizeCanvas()

    // Start animation
    animate()

    // Handle window resize with debounce
    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        resizeCanvas()
      }, 100)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", handleResize)
      clearTimeout(resizeTimeout)
    }
  }, [words, fullBleed, animate, resizeCanvas])

  return (
    <div 
      ref={containerRef} 
      className={`${fullBleed ? 'w-full h-full' : 'w-full'} ${className}`}
      style={fullBleed ? { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 } : {}}
    >
      <canvas
        ref={canvasRef}
        className={fullBleed ? 'w-full h-full' : 'w-full h-auto'}
        style={{ display: "block" }}
      />
    </div>
  )
}

