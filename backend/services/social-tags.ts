import * as cheerio from 'cheerio'
export async function getSocialTags(url: string) {
  try {
    const html = await fetch(url).then((res) => res.text())
    const $ = cheerio.load(html)

    const get = (selector: string, attr: string = 'content') =>
      $(selector).attr(attr)

    return {
      title: $('title').text() || get('meta[name="title"]'),
      description: get('meta[name="description"]'),
      canonical: get('link[rel="canonical"]', 'href'),
      keywords: get('meta[name="keywords"]'),
      ogImage: get('meta[property="og:image"]'),
      themeColor: get('meta[name="theme-color"]')
    }
  } catch (error: any) {
    console.error(error.message)
    return {}
  }
}
