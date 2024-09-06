export const DataTableWidget = () => {
    const data = [
      { id: 1, name: 'John Doe', age: 28 },
      { id: 2, name: 'Jane Doe', age: 25 },
      { id: 3, name: 'Sam Smith', age: 30 },
    ];
  
    return (
      <div>
        <h2>Data Table</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  