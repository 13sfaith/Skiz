<template>
	<div class="product">
		<Header />

		<!-- Holder for product image vs product info -->
		<div id="imgInfoHolder">
			<img :src="imgLink" alt="product img" />
			<Info :payload="info"/>
		</div>
	</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Info from '@/components/product/Info.vue'


export default {
	name: 'Product',
	components: {
		Header,
		Info
	},
	data() {
		return { info : {}, imgLink : "" }
	},
	mounted() {
		fetch(`http://localhost:3000/api/product/${this.$route.params.type}/${this.$route.params.name}`)
			.then(res => res.json())
			.then(payload => this.info = payload[0])
			//.then(payload => console.log(payload))
			.then(payload => this.imgLink = "http://localhost:3000/images/" + payload.brand + "/" + payload.name + ".jpg")
	}
}
</script>

<style scoped>

#imgInfoHolder
{
	display: flex;
}

img
{
	margin-top: 10px;
	width: 50%;
}

</style>
