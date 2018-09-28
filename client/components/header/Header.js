import Link from 'next/link'

const Header = () =>
    <div className="container-header">
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
      <style jsx>{`
      .container-header{
    position: fixed;
    background-color: #9c0600;
    width: 100%;
    top: 0px;
    height: 105px;
    z-index: 3;
  }
  .section{
    max-width: 980px;
    margin: auto;
    position: relative;
  }
  img{
    position: absolute;
    width: 80px;
    height: auto;
    top: 10px;
    left: 10px;
  }
  .title{
    background-color: #ffb900;
    width: 100%;
    font-size: 60px;
    margin-top: 35px;
    text-align: center;
  }
  .tipo{
    width: 50%;
    float: left;
    width: calc(50% - 100px);
    background: #9c0600;
    padding-left: 100px;
    text-align: center;
    font-size: 30px;
  }
  .categoria{
    width: 50%;
    float: left;
    background-color: #dd6b1f;
    text-align: center;
    font-size: 30px;
  }
  nav ul{
    display: flex;
    justify-content: space-around;
    flex-wrap: nowrap;
  }
  nav li a{
    color: #fff;
    text-transform: uppercase;
  }
        `}        
      </style>     
    </div>

export default Header