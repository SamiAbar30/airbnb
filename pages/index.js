import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCard from '../components/SmallCard';
export default function Home({explorDtata}) {
  return (
  <div className="">
  <Head>
    <title></title>
  </Head>
    <Header/>
    <Banner/>
    <main className='max-w-7xl mx-auto px-8 sm:px-16'>
      <section className='pt-6'>
        <h2 className='text-4xl font-semibold pb-5'>Explore Nearbu</h2>
        {explorDtata?.map((item,index)=>
          <SmallCard  key={index} img={item.img} location={item.location} distance={item.distance}/>
        )}
      </section>
    </main>
  </div>
  )
}
export async function getStaticProps(){
  const explorDtata=await fetch("https://www.jsonkeeper.com/b/4G1G").then((res)=>res.json()); 
  return {props:{
     explorDtata
  },
}
}