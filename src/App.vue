<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script>
export default {
  beforeMount(){
    var contentful = require('contentful'),
	contentfulConfig = require('../contentful.json'),
			contentfulKey = require('../config.json'),
			client = contentful.createClient({
				space: contentfulConfig.CTF_SPACE_ID,
				accessToken: contentfulKey.ApiKey,
				host: contentfulKey.Preview ? 'preview.contentful.com' : 'cdn.contentful.com'
			});
		client.getEntries({
			// eslint-disable-next-line camelcase
			content_type:'works',
			include:1
		})
			.then((res) => {
				let works = [];
				res.items.forEach((res) => {
						works.push(res.fields);
				});
				console.log(works[0])
				// Set State
				this.$store.commit('setWorks', works[0]);
			});
  }
}
</script>

<style>
body{
	padding: 0px;
	margin: 0px;
}
#app {
  font-family: 'Catamaran', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x:hidden;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
