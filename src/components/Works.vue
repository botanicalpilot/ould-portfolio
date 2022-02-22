<template>
	<div class="worksContainer">
		<div v-for="(project, index) in returnWorks" :key="index">
			<work :project="project" />
		</div>
	</div>
</template>
<script>
import Work from '@/components/Work.vue'
export default {
	name: 'Works',
	components:{
		Work
	},
	data: function () {
		return {
			
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
	.worksContainer{
		width: 100vw;
		white-space: nowrap;
		background-color: black;
	}
</style>