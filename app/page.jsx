import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, ArrowRight, Check, MessageCircle, Shield, Star } from "lucide-react"
import FeatureCard from "@/components/feature-card"
import TestimonialCard from "@/components/testimonial-card"
import ProfileCard from "@/components/profile-card"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/90 to-primary py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Find Your Perfect Match Today!
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Join thousands of singles looking for meaningful connections. Your journey to love starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Couple enjoying time together"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Profiles */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Profiles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet some of our amazing members who are looking for someone just like you
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <ProfileCard
              name="Jessica, 28"
              location="New York, NY"
              interests={["Travel", "Photography", "Hiking"]}
              imageUrl="/placeholder.svg?height=300&width=250"
            />
            <ProfileCard
              name="Michael, 32"
              location="Los Angeles, CA"
              interests={["Music", "Cooking", "Fitness"]}
              imageUrl="/placeholder.svg?height=300&width=250"
            />
            <ProfileCard
              name="Sophia, 26"
              location="Chicago, IL"
              interests={["Art", "Reading", "Yoga"]}
              imageUrl="/placeholder.svg?height=300&width=250"
            />
            <ProfileCard
              name="David, 30"
              location="Miami, FL"
              interests={["Surfing", "Travel", "Food"]}
              imageUrl="/placeholder.svg?height=300&width=250"
            />
          </div>

          <div className="text-center mt-10">
            <Button size="lg" asChild>
              <Link href="/signup">Join Now to See More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Finding your perfect match is easy with our simple 3-step process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Create Your Profile</h3>
              <p className="text-muted-foreground">
                Sign up and build your profile with photos and personal details that showcase the real you.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Discover Matches</h3>
              <p className="text-muted-foreground">
                Browse profiles and use our advanced matching algorithm to find compatible partners.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Connect & Chat</h3>
              <p className="text-muted-foreground">
                Start conversations with your matches and build meaningful connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our dating platform offers unique features designed to help you find genuine connections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shield className="h-6 w-6" />}
              title="Safe & Secure"
              description="All profiles are verified and your personal data is protected with the highest security standards."
            />
            <FeatureCard
              icon={<Heart className="h-6 w-6" />}
              title="Smart Matching"
              description="Our advanced algorithm suggests compatible matches based on your preferences and behavior."
            />
            <FeatureCard
              icon={<MessageCircle className="h-6 w-6" />}
              title="Real Conversations"
              description="Meaningful chat features help you connect on a deeper level with your matches."
            />
            <FeatureCard
              icon={<Check className="h-6 w-6" />}
              title="Verified Profiles"
              description="We verify all users to ensure you're connecting with real people."
            />
            <FeatureCard
              icon={<Star className="h-6 w-6" />}
              title="Premium Experience"
              description="Upgrade to unlock exclusive features and increase your chances of finding the perfect match."
            />
            <FeatureCard
              icon={<ArrowRight className="h-6 w-6" />}
              title="Success Stories"
              description="Join thousands of happy couples who found love on our platform."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from couples who found their perfect match on our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="I never thought I'd find someone who truly understands me until I joined this platform. Now we're engaged!"
              author="Sarah & James"
              location="Together for 2 years"
              imageUrl="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              quote="After trying several dating apps, this is where I finally met my husband. The matching algorithm really works!"
              author="Emily & Michael"
              location="Married for 1 year"
              imageUrl="/placeholder.svg?height=100&width=100"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-primary text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Perfect Match?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of singles already on our platform and start your journey to finding love today.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
            <Link href="/signup">Create Your Free Profile</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/about#team" className="text-muted-foreground hover:text-primary">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-muted-foreground hover:text-primary">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="text-muted-foreground hover:text-primary">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Features</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/features" className="text-muted-foreground hover:text-primary">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/premium" className="text-muted-foreground hover:text-primary">
                    Premium Features
                  </Link>
                </li>
                <li>
                  <Link href="/success-stories" className="text-muted-foreground hover:text-primary">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-primary">
                    Dating Tips
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/help" className="text-muted-foreground hover:text-primary">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/safety" className="text-muted-foreground hover:text-primary">
                    Safety Tips
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-muted-foreground hover:text-primary">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-muted-foreground hover:text-primary">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="text-muted-foreground hover:text-primary">
                    Community Guidelines
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} Dating App. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

