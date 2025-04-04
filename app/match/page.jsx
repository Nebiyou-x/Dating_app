"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, X, Star, MessageCircle, Filter, ArrowLeft } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Link from "next/link"

// Sample profiles data
const SAMPLE_PROFILES = [
  {
    id: 1,
    name: "Jessica",
    age: 28,
    location: "New York, NY",
    distance: "5 miles away",
    bio: "Love exploring new places and capturing moments. Looking for someone to share adventures with.",
    interests: ["Travel", "Photography", "Hiking"],
    images: ["/placeholder.svg?height=500&width=400"],
  },
  {
    id: 2,
    name: "Michael",
    age: 32,
    location: "Brooklyn, NY",
    distance: "8 miles away",
    bio: "Music producer by day, foodie by night. Let's grab a bite and talk about life.",
    interests: ["Music", "Food", "Art"],
    images: ["/placeholder.svg?height=500&width=400"],
  },
  {
    id: 3,
    name: "Sophia",
    age: 26,
    location: "Manhattan, NY",
    distance: "3 miles away",
    bio: "Yoga instructor and book lover. Looking for someone who values mindfulness and good conversation.",
    interests: ["Yoga", "Reading", "Travel"],
    images: ["/placeholder.svg?height=500&width=400"],
  },
  {
    id: 4,
    name: "David",
    age: 30,
    location: "Queens, NY",
    distance: "12 miles away",
    bio: "Software engineer who loves outdoor activities. Seeking someone to go on hikes and camping trips with.",
    interests: ["Hiking", "Coding", "Photography"],
    images: ["/placeholder.svg?height=500&width=400"],
  },
]

export default function MatchPage() {
  const [profiles, setProfiles] = useState(SAMPLE_PROFILES)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showMatch, setShowMatch] = useState(false)
  const [matchedProfile, setMatchedProfile] = useState(null)
  const [swipeDirection, setSwipeDirection] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [exitDirection, setExitDirection] = useState(null)

  const cardRef = useRef(null)
  const startPositionRef = useRef({ x: 0, y: 0 })

  const currentProfile = profiles[currentIndex]
  const hasProfiles = currentIndex < profiles.length

  // Reset card position when changing profiles
  useEffect(() => {
    setDragOffset({ x: 0, y: 0 })
    setExitDirection(null)
  }, [currentIndex])

  // Handle mouse/touch down
  const handleDragStart = (e) => {
    setIsDragging(true)

    // Get clientX and clientY from either mouse or touch event
    const clientX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX
    const clientY = e.type === "touchstart" ? e.touches[0].clientY : e.clientY

    startPositionRef.current = { x: clientX, y: clientY }
  }

  // Handle mouse/touch move
  const handleDragMove = (e) => {
    if (!isDragging) return

    // Get clientX and clientY from either mouse or touch event
    const clientX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX
    const clientY = e.type === "touchmove" ? e.touches[0].clientY : e.clientY

    const deltaX = clientX - startPositionRef.current.x
    const deltaY = clientY - startPositionRef.current.y

    setDragOffset({ x: deltaX, y: deltaY })

    // Determine swipe direction based on drag
    if (deltaX > 50) {
      setSwipeDirection("right")
    } else if (deltaX < -50) {
      setSwipeDirection("left")
    } else {
      setSwipeDirection(null)
    }
  }

  // Handle mouse/touch up
  const handleDragEnd = () => {
    if (!isDragging) return

    setIsDragging(false)

    // If dragged far enough, complete the swipe
    if (swipeDirection === "right") {
      handleLike()
    } else if (swipeDirection === "left") {
      handlePass()
    } else {
      // Reset position if not swiped far enough
      setDragOffset({ x: 0, y: 0 })
    }
  }

  // Handle like action
  const handleLike = () => {
    if (!hasProfiles) return

    setExitDirection("right")

    // Simulate a match with 30% probability
    const isMatch = Math.random() < 0.3

    if (isMatch) {
      setMatchedProfile(currentProfile)

      // Show match dialog after card animation completes
      setTimeout(() => {
        setShowMatch(true)
      }, 300)
    }

    // Move to next profile after animation
    setTimeout(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1)
    }, 300)
  }

  // Handle pass action
  const handlePass = () => {
    if (!hasProfiles) return

    setExitDirection("left")

    // Move to next profile after animation
    setTimeout(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1)
    }, 300)
  }

  // Handle super like action
  const handleSuperLike = () => {
    if (!hasProfiles) return

    setExitDirection("up")

    // Higher chance of match with super like (50%)
    const isMatch = Math.random() < 0.5

    if (isMatch) {
      setMatchedProfile(currentProfile)

      // Show match dialog after card animation completes
      setTimeout(() => {
        setShowMatch(true)
      }, 300)
    }

    // Move to next profile after animation
    setTimeout(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1)
    }, 300)
  }

  // Calculate card rotation based on drag position
  const getCardStyle = () => {
    if (exitDirection === "left") {
      return {
        transform: `translate(-1000px, 0) rotate(-30deg)`,
        transition: "transform 0.3s ease-out",
      }
    }

    if (exitDirection === "right") {
      return {
        transform: `translate(1000px, 0) rotate(30deg)`,
        transition: "transform 0.3s ease-out",
      }
    }

    if (exitDirection === "up") {
      return {
        transform: `translate(0, -1000px)`,
        transition: "transform 0.3s ease-out",
      }
    }

    if (isDragging) {
      // Calculate rotation based on drag distance
      const rotate = dragOffset.x * 0.1 // Adjust rotation sensitivity
      return {
        transform: `translate(${dragOffset.x}px, ${dragOffset.y}px) rotate(${rotate}deg)`,
      }
    }

    return {
      transform: "translate(0, 0)",
      transition: "transform 0.3s ease-out",
    }
  }

  return (
    <div className="container mx-auto max-w-6xl py-6 px-4 md:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/dashboard">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Find Matches</h1>
        <Button variant="outline" size="icon">
          <Filter className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        {hasProfiles ? (
          <div
            className="relative w-full max-w-md mx-auto h-[500px]"
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchEnd={handleDragEnd}
            onTouchCancel={handleDragEnd}
          >
            <div
              ref={cardRef}
              className="absolute inset-0"
              style={getCardStyle()}
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
            >
              <Card className="w-full h-full overflow-hidden shadow-lg">
                <div className="relative h-full">
                  <img
                    src={currentProfile.images[0] || "/placeholder.svg"}
                    alt={currentProfile.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Swipe indicators */}
                  {swipeDirection === "left" && (
                    <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-4 py-2 rounded-lg font-bold border-2 border-white transform -rotate-12">
                      NOPE
                    </div>
                  )}

                  {swipeDirection === "right" && (
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold border-2 border-white transform rotate-12">
                      LIKE
                    </div>
                  )}

                  {/* Profile info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                    <h2 className="text-2xl font-bold">
                      {currentProfile.name}, {currentProfile.age}
                    </h2>
                    <p className="text-sm opacity-90 mb-2">
                      {currentProfile.location} • {currentProfile.distance}
                    </p>
                    <p className="mb-3">{currentProfile.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {currentProfile.interests.map((interest, index) => (
                        <Badge key={index} variant="secondary" className="bg-white/20 hover:bg-white/30">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        ) : (
          <div className="text-center p-8 bg-muted/30 rounded-lg max-w-md mx-auto">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No more profiles nearby</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your discovery settings to see more people.</p>
            <Button>Adjust Filters</Button>
          </div>
        )}

        {/* Action buttons */}
        {hasProfiles && (
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              className="h-14 w-14 rounded-full border-2 border-destructive text-destructive hover:bg-destructive/10"
              onClick={handlePass}
            >
              <X className="h-8 w-8" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10"
              onClick={handleSuperLike}
            >
              <Star className="h-6 w-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="h-14 w-14 rounded-full border-2 border-primary text-primary hover:bg-primary/10 flex-auto"
              onClick={handleLike}
            >
              <Heart className="h-8 w-8" />
            </Button>
          </div>
        )}
      </div>

      {/* Match dialog */}
      <Dialog open={showMatch} onOpenChange={setShowMatch}>
        <DialogContent className="sm:max-w-md bg-gradient-to-b from-primary to-primary-foreground/90 text-white border-none">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">It's a Match!</DialogTitle>
            <DialogDescription className="text-center text-white/80">
              You and {matchedProfile?.name} liked each other
            </DialogDescription>
          </DialogHeader>

          <div className="flex justify-center gap-4 my-6">
            <div className="relative">
              <img
                src="/placeholder.svg?height=100&width=100"
                alt="Your profile"
                className="w-24 h-24 rounded-full border-4 border-white object-cover"
              />
            </div>
            <div className="relative">
              <img
                src={matchedProfile?.images[0] || "/placeholder.svg"}
                alt={matchedProfile?.name}
                className="w-24 h-24 rounded-full border-4 border-white object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Button className="bg-white text-primary hover:bg-white/90">
              <MessageCircle className="mr-2 h-4 w-4" />
              Send a Message
            </Button>
            <Button
              variant="ghost"
              className="text-white border border-white/30 hover:bg-white/10"
              onClick={() => setShowMatch(false)}
            >
              Keep Swiping
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

