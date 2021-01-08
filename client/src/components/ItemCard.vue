<template>

<div id="card-holder">
	<router-link :to="getRedirect()">
		<img :src="getLink()" alt="Item IMG" />
		<p id="brand">{{ brand }}</p>
		<p id="name">{{ name }}</p>
		<p id="price">${{ price }}</p>
	</router-link>
</div>

</template>

<style scoped>

#card-holder
{
    display: flex;
    flex-direction: column;
	justify-content: flex-start;
    width: 20vw;
	height: 1%;
	box-shadow: 0px 4px 8px #888;
	margin-bottom: 10px;
	margin-top: 10px;
	margin-right: 20px;
}

#card-holder:hover
{
	text-decoration: underline;
}

a
{
	text-decoration: none;
	color: #333;
	width: 100%;
	height: 100%
}

img
{
	height: 250px;
	width: 90%;
	margin-left: 5%;
	margin-top: 2%;
	padding-bottom: 2%;
	border-bottom: 1px solid #000;
}
</style>

<script>

export default {
	name: 'ItemCard',
	props: {
		type: String,
		name: String,
		price: String,
		brand: String,
		id: String,
	},
	methods: {
		getLink() {
			return 'http://localhost:3000/images/' + this.brand + '/' +  this.name + '.jpg'
		},
		getRedirect() {
			return '/product/' + this.type + '/' + this.name
		}
	}, 
}

</script>
