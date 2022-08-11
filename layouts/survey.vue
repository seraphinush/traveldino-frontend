<template>
  <div id="container">
    <div id="wrapper">
      <Loading />
      <Header />
      <div id="content">
        <Nuxt />
      </div>
      <Footer />
    </div>
  </div>
</template>

<style scoped>
#content {
  min-height: calc(100% - var(--header-height) - var(--footer-height));
}
</style>
