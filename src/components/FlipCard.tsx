import React from 'react'

type Props = {
  front: React.ReactNode
  back: React.ReactNode
  className?: string
}

export default function FlipCard({ front, back, className = '' }: Props) {
  return (
    <div className={`group [perspective:1000px] ${className}`}>
      <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 [backface-visibility:hidden]">
          {front}
        </div>
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          {back}
        </div>
      </div>
    </div>
  )
}

