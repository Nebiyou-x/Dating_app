export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-background border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
        <div className="text-primary">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

