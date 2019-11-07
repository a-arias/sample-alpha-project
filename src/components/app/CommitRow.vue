<template>
  <tr
    :key="commit.sha"
    @click="goToDetails"
  >
    <td data-test-id="commitAuthor" v-text="commit.author.login" />
    <td data-test-id="commitSha" v-text="commit.sha" />
    <td data-test-id="commitMessage" v-text="commit.commit.message" />
    <td data-test-id="commitAuthorDate" v-text="commit.commit.author.date" />
    <!-- <td v-text="'Author'" />
    <td v-text="'abcdefabcdefabcdefabcdefabcdefabcdef'" />
    <td v-text="'Commit Message'" />
    <td v-text="'2019-11-01T00:00:00Z'" /> -->
  </tr>
</template>

<script>
export default {
  props: {
    commit: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    goToDetails () {
      const query = {}
      query.page = this.$route.query.page || 1
      query.per_page = this.$route.query.per_page || 10
      this.$router.push({ path: `/commits/${this.commit.sha}`, query })
    },
  },
}
</script>

<style>

</style>
