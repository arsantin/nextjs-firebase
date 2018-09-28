import Link from 'next/link'
const Layout = (props) =>
  <div className="App">
  <header className="container-header">
      <div className="section">        
        <nav>
        <ul>
            <Link href="/"><a>Home</a></Link>
            <Link href="/agenda"><a>Agenda</a></Link>
            <Link href="/food-trucks"><a>Food Trucks</a></Link>
            <Link href="/contato"><a>Contato</a></Link>
          </ul>
        </nav>
      </div><div className="title">Abertos Hoje</div>     
    </header> 
    {props.children}
  </div>

  export default Layout