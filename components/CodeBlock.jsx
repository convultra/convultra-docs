export function CodeBlock({ children, language, filename }) {
  return (
    <div className="code-block-wrapper">
      {filename && (
        <div className="code-block-header">
          <span className="code-block-filename">{filename}</span>
        </div>
      )}
      <pre className={`language-${language || 'javascript'}`}>
        <code>{children}</code>
      </pre>
    </div>
  )
}

