import React from 'react'
import Box from './Box'
const SeoPackage = () => {
  const dataTwo = [
    {
      img: '/health.png',
      head: 'Site Health',
      para:
        'A lot of variables can impact your site’s overall health. Make sure algorithm changes, indexing errors, or manual actions aren’t causing problems.',
      class: 'seo-img',
    },
    {
      img: '/analysis.png',
      head: 'Competitive Analysis ',
      para:
        'A lot of companies are competing for your keywords. We’ll analyze their strengths and weaknesses to find new opportunities for your success..',
      class: 'seo-img',
    },
    {
      img: '/optimization.png',
      head: 'Page Optimization',
      para:
        'Make sure your website converts visitors to paying customers and that it’s fully optimized to achieve the best rankings.',
      class: 'seo-img',
    },
    {
      img: '/link.png',
      head: 'Link Building',
      para:
        'Links from high-quality sources drive relevant traffic to your site and help build authority in Google.',
      class: 'seo-img',
    },
    {
      img: '/month.png',
      head: 'Monthly Reporting',
      para:
        'Stay completely in the loop with a monthly reporting schedule that shows everything we’ve done and how it has impacted your online presence.',
      class: 'seo-img',
    },
    {
      img: '/marketing.png',
      head: 'Content Marketing',
      para:
        'Content is still king in the online world. This can include new on-page content, regular blogs, newsworthy press releases, or complete eBooks.',
      class: 'seo-img',
    },
  ]
  var customArray = dataTwo.map((section) => {
    return (
      <Box
        img={section.img}
        head={section.head}
        para={section.para}
        class={section.class}
      />
    )
  })
  return (
    <>
      <h3 className="text-primary text-center mt-5 text-underline">
        What’s Included in Our Custom SEO Packages
      </h3>
      <div className="row">{customArray}</div>
    </>
  )
}

export default SeoPackage
