<template>
	<div class="workContainer">
		<div class="work"> 
			{{project.fields.title}}
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
		
	}
}
</script>
<style>

</style>