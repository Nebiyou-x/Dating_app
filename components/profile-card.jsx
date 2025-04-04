import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ProfileCard({ name, location, interests, imageUrl }) {
  return (
    <div className="bg-background border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <img src={imageUrl || "/placeholder.svg"} alt={name} className="w-full h-64 object-cover" />
        <Button
          size="icon"
          variant="secondary"
          className="absolute top-3 right-3 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
        >
          <Heart className="h-5 w-5" />
          <span className="sr-only">Like profile</span>
        </Button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground mb-3">{location}</p>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest, index) => (
            <Badge key={index} variant="secondary">
              {interest}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}

