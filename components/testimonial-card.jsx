export default function TestimonialCard({ quote, author, location, imageUrl }) {
  return (
    <div className="bg-background border border-border rounded-lg p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <img src={imageUrl || "/placeholder.svg"} alt={author} className="w-16 h-16 rounded-full object-cover" />
        </div>
        <div>
          <p className="italic text-foreground mb-4">{quote}</p>
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

