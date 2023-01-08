

export default function UserForm({ data, updateFielHandle }) {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input 
          type="text" 
          name="text" 
          id="name"
          placeholder="digite seu nome"
          required
          value={data.name || ""}
          onChange={(e) => updateFielHandle("name", e.target.value)}
        />
      </div>

      <div className="form-control">
        <label htmlFor="email">E-mail:</label>
        <input 
          type="email" 
          name="email" 
          id="email"
          placeholder="digite seu email"
          required
          value={data.email || ""}
          onChange={(e) => updateFielHandle("email", e.target.value)}
        />
      </div>
    </div>
  )
}