<template>
	<div class="worksContainer">
		<work class="works" 
			v-for="(project, index) in this.works"
			:key="index"
			:project="project"
			/>
	</div>
</template>
<script>
import Work from '@/components/Work.vue'
export default {
	name: 'Works',
	components:{
		Work
	},
	mounted(){
		this.works = this.returnWorks;
		console.log(this.works)
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
<style>
	.works{
		width: 100vw;
		white-space: nowrap;
	}
</style>