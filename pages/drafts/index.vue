<template>
  <section class="pages">
    <div
      v-for="meta in metas"
      :key="meta.title"
      class="pages__item">
      <nuxt-link
        :to="`/drafts/${meta.slug}/`"
        :title="meta.title"
        class="pages__link">
        <h2 class="pages__title">
          {{ meta.title }}
        </h2>
      </nuxt-link>
      <MetaData
        :meta-date="meta.date"
        :meta-minute-to-read="meta.minute2read" />
      <div>
        <p>
          {{ meta.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import Contents from '~/contents/drafts/index.js'
import MetaData from '~/components/MetaData'
import BaseData from '~/mixins/base-data'

export default {
  name: 'Homepage',
  layout: 'homepage',
  components: {
    MetaData
  },
  mixins: [
    BaseData
  ],
  head () {
    return {
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex,nofollow' }
      ]
    }
  },
  async asyncData ({ store }) {
    async function asyncImport (blogSlug) {
      const allMarkdown = await import(`~/contents/drafts/${blogSlug}/index.md`)
      return allMarkdown.attributes
    }

    return Promise.all(Contents.data.map(blogSlug => asyncImport(blogSlug)))
      .then((res) => {
        return {
          metas: res
        }
      })
  }
}
</script>

<style lang="scss" scoped>
.pages {
  &__title {
    margin-bottom: .25em;
  }
  &__date {
    color: var(--textSubtitle);
  }
  &__item {
    margin-bottom: 3.5em;
  }
}
</style>
