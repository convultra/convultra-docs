export function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      {icon && <div className="feature-icon">{icon}</div>}
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  )
}

export function FeatureGrid({ children }) {
  return (
    <div className="feature-grid">
      {children}
    </div>
  )
}

