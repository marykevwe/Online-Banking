import React from 'react'
import Layout from '../layout/Layout'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <Layout>
      <div className="text-center">
              <Hero />
        <h2 className="text-3xl font-semibold">Welcome to Capital One </h2>
        <p className="mt-4 text-gray-600">Your digital banking experience starts here.</p>
      </div>
    </Layout>
  )
}
