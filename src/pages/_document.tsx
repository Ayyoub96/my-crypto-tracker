import { Html, Head, Main, NextScript } from 'next/document'
import Header from '@/Components/Header'

export default function Document() {
  return (
    <Html lang="en" className="bg-gray-900">
      <Head />
      <body className="bg-gray-900" >
        <Header/>
        <Main  />
        <NextScript />
      </body>
    </Html>
  )
}
