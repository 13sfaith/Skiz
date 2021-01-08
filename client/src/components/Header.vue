<template>
	<div>
		<link rel="preconnect" href="https://fonts.gstatic.com">
		<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"> 

		<link href="https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap" rel="stylesheet"> 

		<div id="header-holder">
			<div id="header-left">
				<router-link to="/">
				<p id="inside">SKIZ</p>
				</router-link>
			</div>
			<div id="header-mid">
				<nav>
					<ul><router-link to="/browse/Racing">Racing</router-link></ul>
					<ul><router-link to="/browse/All Mountain">All Mountain</router-link></ul>
					<ul><router-link to="/browse/Freestyle">Freestyle</router-link></ul>
				</nav>
			</div>
			<div id="header-right">
				<nav>
					<ul><a><img src="../assets/icons/search.svg" alt="s" /></a></ul>
                    <ul class="cart-nav" v-on:mouseover="updateCart" 
                      v-on:mouseleave="isChecked = false">
                      <a>
                        <img src="../assets/icons/cart.svg" alt="c" />
						<Cart class="cart-card" :items="payload.items" :total="total">
						</Cart>
					</a></ul>
				</nav>
			</div>
			
		</div>
	</div>
</template>

<script>

import Cart from '@/components/header/Cart.vue'

export default {
	name: "Header",
	components: {
		Cart
    },
    data: () => {
        return {
          isChecked : false,
          payload: {},
          total: 0
        }
    },
    methods: {
        updateCart() {
            if (this.isChecked === false)
            {
                console.log(this.$cookies.get("cart"))
                this.isChecked = true
                this.payload = this.$cookies.get("cart")

                this.total = 0
                for (let i = 0; i < this.payload.items.length; i++)
                {
                  this.total += this.payload.items[i].quantity * this.payload.items[i].price
                }

            }
        }
    }
}

</script>

<style scoped>
img
{
	max-width: 32px;
	opacity: 40%;
}

ul:hover img 
{
	opacity: 100%;
}

#header-mid 
{
	font-family: 'Roboto', sans-serif;
}

#header-left > a > #inside
{
	font-family: 'Reenie Beanie', cursive;
	font-size: 55px;
	line-height: 0px;
	position: relative;
	top: -25px;
}

#header-left > a
{
	color: #000;
	text-decoration: none;
}


#header-holder
{
	width: 100vw;
	display: flex;
	height: 65px;
	justify-content: space-between;
	border-bottom: 1px solid #000;
}

#header-left
{
	min-width: 25vw; 
}

#header-left > a > p
{
	margin-left: 10px;
}

#header-mid
{
	min-width: 33vw;
}

#header-mid > nav
{
	display: flex;
	width: 100%;
	justify-content: center;
	color: #888;
}

#header-mid > nav > ul > a
{
	color: #888;
	text-decoration: none;
}

#header-mid > nav > ul > a.router-link-exact-active
{
	color: #000;
	text-decoration: underline;
}

#header-mid > nav > ul:hover
{
	color: #000;
	text-decoration: underline;
}

#header-right
{
	min-width: 33vw;
}

#header-right > nav
{
	width: 90%;
	display: flex;
	justify-content: flex-end;
	margin-right: 10px;
	padding-right: 10px;
}


.cart-card
{
	display: none;
	position: absolute;
	background-color: #fff;
	width: 40%;
	left: 60%;
	top: 65px;
	z-index: 1;
}

.cart-nav:hover .cart-card
{
	display: block;
}

ul
{
	height: 65px;
}

</style>
