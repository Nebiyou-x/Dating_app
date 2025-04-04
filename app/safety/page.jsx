import { Card, CardContent } from "@/components/ui/card"
import { Shield, AlertTriangle, Eye, Lock, UserX, HelpCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function SafetyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center text-white space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Your Safety Is Our Priority</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              Learn about the measures we take to keep our community safe and how you can protect yourself while dating
              online.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Safety Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We've implemented comprehensive safety measures to protect our users
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Profile Verification</h3>
                  <p className="text-muted-foreground">
                    We verify all users through email, phone, and optional photo verification to ensure authentic
                    profiles.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Report & Block</h3>
                  <p className="text-muted-foreground">
                    Easily report inappropriate behavior or block users you don't want to interact with.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Privacy Controls</h3>
                  <p className="text-muted-foreground">
                    Customize who can see your profile and control what information you share.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Online Dating Safety Tips</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow these guidelines to stay safe while using our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Eye className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Meet in Public Places</h3>
                  <p className="text-muted-foreground">
                    Always meet your matches in public locations for the first few dates. Choose busy places like cafes
                    or restaurants.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <UserX className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Don't Share Personal Information</h3>
                  <p className="text-muted-foreground">
                    Avoid sharing sensitive details like your home address, financial information, or workplace early in
                    the relationship.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <HelpCircle className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Tell a Friend</h3>
                  <p className="text-muted-foreground">
                    Let someone know about your date plans, including where you're going and when you expect to return.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Trust Your Instincts</h3>
                  <p className="text-muted-foreground">
                    If something feels off about a person or situation, trust your gut feeling and remove yourself from
                    the interaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Safety FAQ</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Common questions about safety on our platform</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I report inappropriate behavior?</AccordionTrigger>
                <AccordionContent>
                  You can report any user by clicking the "Report" button on their profile or in your conversation. Our
                  moderation team reviews all reports within 24 hours and takes appropriate action.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>What happens when I block someone?</AccordionTrigger>
                <AccordionContent>
                  When you block a user, they will no longer be able to view your profile, send you messages, or see you
                  in their matches. They will not be notified that you've blocked them.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>How does profile verification work?</AccordionTrigger>
                <AccordionContent>
                  We verify users through email confirmation, phone verification, and optional photo verification where
                  you take a selfie that matches your profile photos. Verified profiles receive a verification badge.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Can I hide my profile temporarily?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can pause your profile visibility in the privacy settings. This means your profile won't
                  appear in searches or matches until you make it visible again.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>How do you handle my personal data?</AccordionTrigger>
                <AccordionContent>
                  We take data protection seriously. Your personal information is encrypted and stored securely. We
                  never share your data with third parties without your consent. You can review our full Privacy Policy
                  for more details.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Safety Team */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-primary text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Our safety team is available 24/7 to assist with any concerns or questions you may have.
          </p>
          <div className="inline-block bg-white text-primary font-medium px-6 py-3 rounded-lg">
            safety@datingapp.com
          </div>
        </div>
      </section>
    </div>
  )
}

