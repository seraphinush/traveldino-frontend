<template>
  <div id="container">
    <div id="wrapper">
      <Loading />
      <Header />
      <div id="content">
        <Nuxt />
      </div>
      <Footer />
      <Profiles />
    </div>
  </div>
</template>

<style scoped>
#content {
  min-height: calc(
    100% - var(--header-height) - var(--footer-height) - var(--profiles-height)
  );
}
</style>
