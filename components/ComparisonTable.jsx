export function ComparisonTable({ data }) {
  return (
    <div className="comparison-table">
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Traditional Pixels</th>
            <th>Convultra</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>{row.feature}</td>
              <td className={row.traditional === '❌' ? 'negative' : ''}>{row.traditional}</td>
              <td className={row.convultra === '✅' ? 'positive' : ''}>{row.convultra}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

