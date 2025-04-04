import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"

export default function PremiumPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center text-white space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Upgrade Your Dating Experience</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              Unlock premium features to increase your chances of finding the perfect match
            </p>
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Premium Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enhance your dating experience with these exclusive benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>See Who Likes You</CardTitle>
                <CardDescription>Skip the guessing game and see who's interested in you</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="See who likes you"
                  className="rounded-lg w-full h-40 object-cover mb-4"
                />
                <p className="text-muted-foreground">
                  Get instant access to a list of all users who have liked your profile, allowing you to match with them
                  immediately if you're interested.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Unlimited Likes</CardTitle>
                <CardDescription>Never run out of likes again</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Unlimited likes"
                  className="rounded-lg w-full h-40 object-cover mb-4"
                />
                <p className="text-muted-foreground">
                  Like as many profiles as you want without any daily restrictions, maximizing your chances of finding a
                  match.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Advanced Filters</CardTitle>
                <CardDescription>Find exactly what you're looking for</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Advanced filters"
                  className="rounded-lg w-full h-40 object-cover mb-4"
                />
                <p className="text-muted-foreground">
                  Filter potential matches by additional criteria like education, height, relationship goals, and more
                  to find your ideal partner.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Profile Boost</CardTitle>
                <CardDescription>Get more visibility in your area</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Profile boost"
                  className="rounded-lg w-full h-40 object-cover mb-4"
                />
                <p className="text-muted-foreground">
                  Your profile will be shown to more users in your area for 30 minutes, increasing your visibility and
                  potential matches.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Super Likes</CardTitle>
                <CardDescription>Stand out from the crowd</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Super likes"
                  className="rounded-lg w-full h-40 object-cover mb-4"
                />
                <p className="text-muted-foreground">
                  Send Super Likes to show someone you're really interested. Profiles you Super Like are 3x more likely
                  to match with you.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Incognito Mode</CardTitle>
                <CardDescription>Browse privately</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Incognito mode"
                  className="rounded-lg w-full h-40 object-cover mb-4"
                />
                <p className="text-muted-foreground">
                  Browse profiles without being visible to others unless you like them. Perfect for discreet dating.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Select the premium plan that works best for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>1 Month</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$29.99</span>
                  <span className="text-muted-foreground ml-1">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>See who likes you</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Unlimited likes</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>5 Super Likes per day</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>1 Profile Boost per month</span>
                  </li>
                  <li className="flex items-center">
                    <X className="h-5 w-5 text-muted-foreground mr-2" />
                    <span className="text-muted-foreground">Advanced Filters</span>
                  </li>
                  <li className="flex items-center">
                    <X className="h-5 w-5 text-muted-foreground mr-2" />
                    <span className="text-muted-foreground">Incognito Mode</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Subscribe Now</Button>
              </CardFooter>
            </Card>

            <Card className="border-primary md:scale-105 shadow-lg">
              <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
                <div className="text-center text-sm font-medium uppercase tracking-wide mb-2">Most Popular</div>
                <CardTitle>6 Months</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$19.99</span>
                  <span className="text-primary-foreground/80 ml-1">/month</span>
                </div>
                <CardDescription className="text-primary-foreground/80">Save 33% compared to monthly</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>See who likes you</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Unlimited likes</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>10 Super Likes per day</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>2 Profile Boosts per month</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Advanced Filters</span>
                  </li>
                  <li className="flex items-center">
                    <X className="h-5 w-5 text-muted-foreground mr-2" />
                    <span className="text-muted-foreground">Incognito Mode</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Subscribe Now</Button>
              </CardFooter>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>12 Months</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$14.99</span>
                  <span className="text-muted-foreground ml-1">/month</span>
                </div>
                <CardDescription>Save 50% compared to monthly</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>See who likes you</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Unlimited likes</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Unlimited Super Likes</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>4 Profile Boosts per month</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Advanced Filters</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Incognito Mode</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Subscribe Now</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Premium Users Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Hear from users who upgraded to premium</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="User"
                    className="w-16 h-16 rounded-full object-cover mb-4"
                  />
                  <p className="italic mb-4">
                    "The Profile Boost feature helped me get 3x more matches in just one day. Definitely worth the
                    upgrade!"
                  </p>
                  <div>
                    <p className="font-semibold">Michael, 32</p>
                    <p className="text-sm text-muted-foreground">Premium user for 4 months</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="User"
                    className="w-16 h-16 rounded-full object-cover mb-4"
                  />
                  <p className="italic mb-4">
                    "Being able to see who liked me saved me so much time. I found my current boyfriend within a week of
                    upgrading!"
                  </p>
                  <div>
                    <p className="font-semibold">Sarah, 27</p>
                    <p className="text-sm text-muted-foreground">Premium user for 6 months</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="User"
                    className="w-16 h-16 rounded-full object-cover mb-4"
                  />
                  <p className="italic mb-4">
                    "The advanced filters helped me find people who share my passion for hiking and travel. Quality
                    matches over quantity!"
                  </p>
                  <div>
                    <p className="font-semibold">David, 35</p>
                    <p className="text-sm text-muted-foreground">Premium user for 2 months</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about our premium plans
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-3">Can I cancel anytime?</h3>
              <p className="text-muted-foreground">
                Yes, you can cancel your subscription at any time. Your premium features will remain active until the
                end of your billing period.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">How do I upgrade to premium?</h3>
              <p className="text-muted-foreground">
                You can upgrade directly from your account settings page. We accept all major credit cards and PayPal.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Will my subscription auto-renew?</h3>
              <p className="text-muted-foreground">
                Yes, subscriptions automatically renew at the end of each billing cycle. You can turn off auto-renewal
                in your account settings.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Is there a free trial?</h3>
              <p className="text-muted-foreground">
                We occasionally offer 7-day free trials for new users. Check your email for special promotions or
                contact our support team.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Can I switch plans?</h3>
              <p className="text-muted-foreground">
                Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you'll pay the prorated
                difference. If you downgrade, the new rate will apply at your next billing cycle.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Is my payment secure?</h3>
              <p className="text-muted-foreground">
                Absolutely. We use industry-standard encryption to protect your payment information. We never store your
                full credit card details on our servers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-primary text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Upgrade Your Dating Experience?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of premium users who are finding more matches and meaningful connections.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Get Premium Now
          </Button>
        </div>
      </section>
    </div>
  )
}

