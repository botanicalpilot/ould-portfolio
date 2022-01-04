<template>
	<div class="workContainer">
		<div class="work"> 
			{{title}}
		</div>
	</div>
</template>
<script>
export default {
	name: 'Work',
	props:["project"],
	data: function () {
		return {
			
		}
	},
	computed:{
		title(){
			return this.project.fields.title
		},
	}
}
</script>
<style>

</style>