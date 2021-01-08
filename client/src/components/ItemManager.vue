<template>

	<div id="holder"> 


		<ItemCard v-for="item in payload" v-bind:key="item.id" 
		:type="item.type" :price="(Math.round(item.price * 100) / 100).toFixed(2)" 
		:brand="item.brand" :name="item.name" :id="item.id.toString()"/>
	</div>

</template>

<script>

import ItemCard from '@/components/ItemCard.vue'

export default {
	name: 'ItemManager',
	data: () => {
		return {
			items: [
			]
		}
	},
	props: {
		payload : Array
	},
	components: {
		ItemCard
	}
}

</script>

<style scoped>

#holder
{
	display: flex;
	flex-wrap: wrap;
	width: 90%;
	height: 100%;
	margin-left: 5%;
	margin-right: 5%;
}

</style>
