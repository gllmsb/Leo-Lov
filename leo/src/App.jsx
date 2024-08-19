import './App.css'
import { Cards } from './components/cards/cards';
import { Content } from './components/content/content';
import { Header } from './components/header/header';
import { Navbar } from './components/navbar/navbar';

import problemImage from './assets/images/problem.png';
import garantiImage from '../src/assets/images/garanti.png';
import { Team } from './components/team/team';
import { Address } from './components/address/address';
import { Footer } from './components/footer/footer';

function App() {


  return (
    <>
      <Navbar/>
      <Header/>
      <Cards/>
      <Content
        image={problemImage}
        title="INTET PROBLEM"
        description="Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle opleve at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen;"
        additionalInfo="Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!"
      />
      <Content
        image={garantiImage}
        title="EVIG GARANTI"
        description="Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen;"
        additionalInfo="Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!"
        reverse={true}
      />
      <Team/>
      <Address/>
      <Footer/>
    </>
  )
}

export default App
