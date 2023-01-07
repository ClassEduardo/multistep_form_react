

export default function UserForm() {
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
        />
      </div>
    </div>
  )
}