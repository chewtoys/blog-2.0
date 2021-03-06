import {
  generateMetaHead
} from '~/utils/helpers'

export default {
  head () {
    const title = `${this.meta.title}`
    const description = `${this.meta.description}`
    const postfix = this.lang === 'ID' ? '/' : '/en'
    const url = `${this.productionUrl}/${this.meta.slug}${postfix}`
    const imageUrl = this.meta.cover || `${this.productionUrl}/icon.png`

    return generateMetaHead({
      title,
      description,
      url,
      imageUrl,
      date: this.meta.date,
      withCanonical: true,
      withArticle: true
    })
  }
}
