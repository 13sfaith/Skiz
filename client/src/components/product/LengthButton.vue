<template>

<div id="button-holder" v-on:click="handleClick" 
:class="(skilength.active == true ? 'active' : 'none')">

	{{ skilength.len }}

</div>

</template>

<style scoped>

#button-holder {
	width: 75px;
	height: 45px;
	border: 1px solid #333;
	margin-right: 15px;
	line-height: 45px;
	cursor: pointer;
}

#button-holder:hover {
	background-color: #666;
}

.active {
	background-color: #333;
	color: #fff;
}


</style>

<script>

export default {
	name: 'LengthButton',
	inject: ["toggleActive"],
	props: {
		skilength : Object,
	},
	methods: {
		handleClick: function () {
			this.toggleActive(this.skilength.id)
		}

	}

		
}

</script>
