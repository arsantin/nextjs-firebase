import Layout from '../components/Layout.js'
import AbertosHoje from '../components/AbertosHoje.js'
import Header from '../components/header/Header.js'
import 'isomorphic-fetch'
import { loadFirebase } from '../lib/db.js'

export default class Index extends React.Component{
  static getInitialProps = () => 
    loadFirebase().firestore().collection('foodtrucks')
      .get()    
      .then(snapshot => {
        let data = []
        snapshot.forEach((doc) => {
          data.push({
            id: doc.id,
            truck: doc.data().truck,
            logo: doc.data().logo,
            tipo: doc.data().tipo,
            categoria: doc.data().categoria,
            ...doc.data()
            })
          })
        return  {foodtrucks: data} 
      })

  render(){  
    return(
    <Layout>    
    <Header/> 
   <AbertosHoje {...this.props}/>    
  <style jsx global>{`
  body{
    background-color: #e41a24;
    font-family: 'boldcn';
    color: #fff !important;
    font-size: 16px;
    font-display: auto;
    background-attachment: fixed;
    background-image: url('https://blog-cdn.eduk.com.br/wp-content/uploads/sites/3/2017/11/28173241/hamb%C3%BArguer-artesanal-2.jpg')
  }  
    `}</style>  
  </Layout>
    )
  }
}