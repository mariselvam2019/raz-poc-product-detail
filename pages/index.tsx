import type { GetServerSideProps, NextPage } from 'next'
import dataJSON from "../shared/lib/db.json";
const Home: NextPage = () => {
  return (
    <h1 className="text-3xl font-bold text-center">
      Welcome to products !!!
    </h1>
  )
}

export default Home
