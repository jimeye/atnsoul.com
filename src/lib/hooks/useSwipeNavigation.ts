"use client"

import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'

interface SwipeNavigationConfig {
  threshold?: number // Distance minimale pour déclencher la navigation
  velocity?: number // Vitesse minimale pour déclencher la navigation
}

export function useSwipeNavigation(config: SwipeNavigationConfig = {}) {
  const { threshold = 100, velocity = 0.3 } = config
  const router = useRouter()
  const [isSwiping, setIsSwiping] = useState(false)
  const startXRef = useRef(0)
  const startYRef = useRef(0)
  const startTimeRef = useRef(0)
  const currentXRef = useRef(0)
  const currentYRef = useRef(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Configuration des pages et leur ordre
  const pages = [
    '/',
    '/la-serre-aux-papillons',
    '/nyc-sessions',
    '/amarela',
    '/co-productions'
  ]

  const getCurrentPageIndex = () => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname
      return pages.indexOf(path)
    }
    return 0
  }

  const navigateToPage = (direction: 'next' | 'prev') => {
    const currentIndex = getCurrentPageIndex()
    let nextIndex: number

    if (direction === 'next') {
      nextIndex = currentIndex < pages.length - 1 ? currentIndex + 1 : 0
    } else {
      nextIndex = currentIndex > 0 ? currentIndex - 1 : pages.length - 1
    }

    const nextPage = pages[nextIndex]
    if (nextPage && nextPage !== window.location.pathname) {
      router.push(nextPage)
    }
  }

  const handleTouchStart = useCallback((e: any) => {
    const isTouch = typeof e === 'object' && 'touches' in e
    const clientX = isTouch ? e.touches[0].clientX : e.clientX
    const clientY = isTouch ? e.touches[0].clientY : e.clientY

    startXRef.current = clientX
    startYRef.current = clientY
    currentXRef.current = clientX
    currentYRef.current = clientY
    startTimeRef.current = Date.now()
    setIsSwiping(true)
  }, [])

  const handleTouchMove = useCallback((e: any) => {
    if (!isSwiping) return
    const isTouch = typeof e === 'object' && 'touches' in e
    const clientX = isTouch ? e.touches[0].clientX : e.clientX
    const clientY = isTouch ? e.touches[0].clientY : e.clientY
    currentXRef.current = clientX
    currentYRef.current = clientY
  }, [isSwiping])

  const handleTouchEnd = useCallback(() => {
    if (!isSwiping) return

    const deltaX = currentXRef.current - startXRef.current
    const deltaY = currentYRef.current - startYRef.current
    const deltaTime = Date.now() - startTimeRef.current
    const velocityX = Math.abs(deltaX) / Math.max(deltaTime, 1)

    const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY)

    if (isHorizontalSwipe && Math.abs(deltaX) > threshold && velocityX > velocity) {
      navigateToPage(deltaX > 0 ? 'prev' : 'next')
    }

    setIsSwiping(false)
  }, [isSwiping, threshold, velocity])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.addEventListener('touchstart', handleTouchStart, { passive: true })
    container.addEventListener('touchmove', handleTouchMove, { passive: true })
    container.addEventListener('touchend', handleTouchEnd, { passive: true })
    container.addEventListener('mousedown', handleTouchStart as any, { passive: true })
    container.addEventListener('mousemove', handleTouchMove as any, { passive: true })
    container.addEventListener('mouseup', handleTouchEnd as any, { passive: true })

    return () => {
      container.removeEventListener('touchstart', handleTouchStart as any)
      container.removeEventListener('touchmove', handleTouchMove as any)
      container.removeEventListener('touchend', handleTouchEnd as any)
      container.removeEventListener('mousedown', handleTouchStart as any)
      container.removeEventListener('mousemove', handleTouchMove as any)
      container.removeEventListener('mouseup', handleTouchEnd as any)
    }
  }, [handleTouchStart, handleTouchMove, handleTouchEnd])

  return { containerRef, isSwiping }
}
