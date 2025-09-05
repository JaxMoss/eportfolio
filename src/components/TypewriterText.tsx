import React from 'react'

type Props = {
  text: string
  speedMs?: number
  className?: string
  showCaret?: boolean
}

export default function TypewriterText({ text, speedMs = 45, className = '', showCaret = true }: Props) {
  const [i, setI] = React.useState(0)

  React.useEffect(() => {
    let raf = 0
    let last = performance.now()
    let acc = 0
    const step = (now: number) => {
      const dt = now - last
      last = now
      acc += dt
      while (acc > speedMs && i < text.length) {
        setI(prev => Math.min(text.length, prev + 1))
        acc -= speedMs
      }
      if (i < text.length) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, speedMs])

  return (
    <span className={className}>
      {text.slice(0, i)}{showCaret && i < text.length && <span className="tw-caret" aria-hidden>|</span>}
    </span>
  )
}

