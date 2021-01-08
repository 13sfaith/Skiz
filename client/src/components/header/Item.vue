<template>

<div id="item-holder">

    <img 
     :src="'http://localhost:3000/images/' + this.payload.brand + '/' + this.payload.name + '.jpg'" 
     alt="product img" />

	<div id="info">
		<h6>{{ payload.brand }}</h6>
		<p>{{ payload.name }}</p>

		<div id="quantity">
			<input :value="payload.quantity"/>
		</div>
	</div>

	<div id="price">
		<h2>${{ payload.price * payload.quantity }}</h2>

		<p id="remove">Remove Item</p>
	</div>

</div>

</template>

<script>
    export default {
        name: "Item",
        props: {
            payload: Object
        }
    }

</script>

<style scoped>

#item-holder
{
	display: flex;
	justify-content: space-around;
	padding-top: 10px;
}

input
{
	width: 33px;
	height: 33px;
	text-align: center;
	border: 1px solid #333;
	font-size: 15px;
}

img
{
	width: 102px;
}


</style>
