<template>
	<div class="worksContainer">
		<div class="works" 
			v-for="(project, index) in works"
			:key="index"
			>{{project.fields.title}}
		</div>
	</div>
</template>
<script>
export default {
	name: 'Works',
	mounted(){
		this.works = this.returnWorks;
		console.log(this.works.title)
	},
	data: function () {
		return {
			works: 0
		}
	},
	computed:{
		returnWorks(){
			return this.$store.state.works.workArray
		}
	}
}
</script>