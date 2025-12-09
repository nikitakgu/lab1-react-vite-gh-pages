import { useState } from 'react'

type Person = {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export default function UserTable() {
  const [users] = useState<Person[]>([
    { id: 1, name: "Vinokurov A.V.", email: "vinokurov@example.com", phone: "+7000000001" },
    { id: 2, name: "Nefedov Danila", email: "nefedov@example.com", phone: "+7000000002" },
    { id: 3, name: "Petr Myagkov", email: "myagkov@example.com", phone: "+7000000003" },
    { id: 4, name: "Sokolov Nikita", email: "sokolov@example.com", phone: "+7000000004" },
    { id: 5, name: "Pavel Sezhok", email: "sezhok@example.com", phone: "+7000000005" },
    { id: 6, name: "DyaDya Vitya", email: "dyadya@example.com", phone: "+7000000006" }
  ]);

  const [showTable, setShowTable] = useState(false)
  const [search, setSearch] = useState("")

  const filtered = users.filter(u =>
    u.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>

      {!showTable && (
        <button onClick={() => setShowTable(true)}>
          Показать пользователей
        </button>
      )}

      {showTable && (
        <>
          <input
            type="text"
            placeholder="Поиск по email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ margin: "20px 0", padding: "8px", width: "250px" }}
          />

          {search.length >= 3 && filtered.length === 0 && (
            <p>Ничего не найдено</p>
          )}

          <table border={1} cellPadding={10}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  )
}
