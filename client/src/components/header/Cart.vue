<template>

<div id = "cart-holder">
	<!-- items -->
	<Item v-for="item in items" :payload="item" v-bind:key="item.id + item.length" />

	<!-- checkout buttons -->

	<div id="cart-buttons">

		<div id="price">${{ (Math.round(this.total * 100) / 100).toFixed(2) }}</div>

		<div id="check-out">Check Out</div>

	</div>

</div>

</template>

<style scoped>

#cart-holder
{
	box-shadow: -2px 2px 2px 1px rgba(0, 0, 0, 0.2);
	border-top: 1px solid #333;
}
	
#cart-buttons
{
	display: flex;
	justify-content: space-around;
	padding-top: 20px;
	padding-bottom: 10px;
}

#cart-buttons > *
{
	align-self: flex-end;

	width: 250px;
	height: 60px;

	line-height: 60px;
	border: 1px solid #333;
}
		
</style>

<script>
import Item from '@/components/header/Item.vue'

export default {
	name: "Cart",
	components: {
		Item
    },
    props: {
        items: Array,
        total: Number
    }
}

</script>
