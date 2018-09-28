export default class AbertosHoje extends React.Component{
  

  render(){
    console.log("abertos", this.props)
    return(  
    <div className='container-aberto wow fadeInDown' data-wow-offset='50' data-wow-delay='0.5s' >     
           {this.props.foodtrucks.map((truck) => {
             return <div className="wrapper">
              <div className="tipo">{truck.tipo}</div>
        <div className="categoria">{truck.categoria}</div>
        <div className="left">
        <div className="logotruck">
         <img src={truck.logo} alt="logo foodtruck" /> 
        </div>
      </div>
      <div className="middle">
        <div className="nometruck">{truck.truck}</div>
        <div className="horatruck">{truck.tipo}</div>
        <div className="enderecotruck">{truck.categoria}</div>
        <div className="bairrotruck">Uberaba</div>
        <div className="cidadetruck">Curitiba</div>
        </div>
        <div className="right">
      <div className="nomelocal">Kadan Cervejaria</div>
      <div className="fotolocal">
        
        </div>
      </div>
        </div>           
           })}
      <style jsx>{`  
  .container-aberto{    
    max-width: 980px;
    margin: auto;
    background-color: #fff;
    margin-bottom: 30px;
    width: 100%;
    margin-top: 150px;
  }  
  .tipo{
    width: 50%;
    float: left;
    width: calc(50% - 100px);
    background: #dc4646;
    padding-left: 100px;
    text-align: center;
    font-size: 30px;
  }
  .categoria{
    width: 50%;
    float: left;
    background-color: #dc8246;
    text-align: center;
    font-size: 30px;
  }
  .logotruck{
    height: 220px;
  }
  .wrapper{
    background-color: #fff;
    width: 100%;
    max-width: 980px;
    float: left;
    margin-bottom: 40px;
  }
  .left{
    float: left;
    max-width: 220px;
  }
  .middle{
    float: left;
    margin: 20px 15px;
  }
  .right{
    background-color: #fff;
    float: right;  
    position: relative;  
  }
  .right .fotolocal{
    height: 220px;
    width: auto;    
  }
  .right .nomelocal{
    position: absolute;
    z-index: 2;
    background-color: #000;
    opacity: 0.8;
    color: #fff;
    right: 0px;
    bottom: 0px;
    width: 295px;
    padding: 10px;
  }
  .nometruck{
    color: #e4131f;
    font-size: 60px;
  }
  .horatruck{
    color: #e4131f;
    font-size: 24px;
  }
  .enderecotruck{
    color: #9c0600;
    font-size: 24px;
  }
  .bairrotruck{
    color: #9c0600;
    font-size: 24px;
    float: left;
    margin-right: 10px;
  }
  .cidadetruck{
    color: #9c0600;
    font-size: 24px;
  }  
    `}

  </style>
</div>)}} 