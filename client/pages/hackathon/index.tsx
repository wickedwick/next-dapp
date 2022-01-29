import axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { ProjectPageContent } from '../../types/project'

export default function Hackathon() {
  const [content, setContent] = useState<ProjectPageContent | null>(null)
  const baseApiUrl = 'https://d-cms-test.herokuapp.com/api/public/content/CJ6oYaR2UQ6Rqs2WtnrLH'

  useEffect(() => {
    axios.get(baseApiUrl)
      .then(res => {
        console.log(res.data)
        const pageContent: ProjectPageContent = {
          title: res.data.values.find(c => c.name === 'Title')?.value,
          description: res.data.values.find(c => c.name === 'Description')?.value,
          links: res.data.values.find(c => c.name === 'Links')?.values,
        }
        setContent(pageContent)
      })
  }, [])

  return (
    <Layout home={false}>
      <Head>
        <title>Near MetaBUILD Hackathon</title>
      </Head>
      {!content && <h1>Loading...</h1>}
      {content && (
        <section data-aos="fade-up" className={utilStyles.headingMd}>
          <h3 className="text-3xl font-medium leading-tight mt-0 mb-3 text-white">
            {content.title}
          </h3>
          <div dangerouslySetInnerHTML={{ __html: content.description }} />
          <div dangerouslySetInnerHTML={{ __html: content.links }} />
        </section>
      )}
    </Layout>
  )
}
