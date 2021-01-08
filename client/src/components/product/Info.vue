<template>

<div class="Info">
	<h6 class="center">{{ payload.brand }}</h6>
	<h1 class="center">{{ payload.name }}</h1>

	<p class="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer quis auctor elit sed vulputate. Ultricies tristique nulla aliquet enim. Et ultrices neque ornare aenean euismod. Mauris rhoncus aenean vel elit scelerisque. Quis risus sed vulputate odio ut enim. In fermentum posuere urna nec tincidunt praesent semper.</p>

	<!-- <LengthButton :skilength="'373'" /> -->
	<div id="length-b-holder">
		<LengthButton v-for="len in skilength" 
		v-bind:key="len.id" :skilength="len"  />
	</div>

	<div id="priceCartHolder">
		<div class="pcButton" id="price"><p>${{ payload.price }}</p></div>

		<div class="pcButton" v-on:click="addToCart" id="cartButton"><p>Add to Cart</p></div>
	</div>


</div>

</template>


<script>
	import LengthButton from '@/components/product/LengthButton.vue'

    function binarySearch(arr, id, len)
    {
        //linear search for now will update later
        for (let i = 0; i < arr.length; i++)
        {
            if (arr[i].id == id && arr[i].length == len){ return i; }
        }
        return -1;
    }

	export default {
		name: 'Info',
		components: {
			LengthButton
		},
		props: {
			payload: Object,
		},	
		data: () => {
			return {
				skilength: []
			}
		},
		provide: function() {
			return {
				toggleActive: this.toggleActive
			}
		},
		updated() {
			if (this.payload != undefined && this.skilength.length < 1)
			{
				let skilengths = this.payload.skilength.split(',')
				
				for (let i = 0; i < skilengths.length; i++)
				{
					this.skilength.push({id : i, len : skilengths[i], active : false})
				}
			}
			
		},
		methods: {
			toggleActive: function(id){
				for (let i = 0; i < this.skilength.length; i++)
				{
					if (this.skilength[i].id === id)
					{
						this.skilength[i].active = !this.skilength[i].active
					} else {
						this.skilength[i].active = false
					}
				}
			},
			addToCart: function() {

				for (let i = 0; i < this.skilength.length; i++)
				{
					if (this.skilength[i].active)
					{
                        //check if item exists
                        if (this.$cookies.isKey("cart"))
                        {
                          var index = binarySearch(this.$cookies.get("cart").items, 
                                                   this.payload.id,
                                                   this.skilength[i].len)
                            var cart = this.$cookies.get("cart")
                            console.log(index)

                            if (index == -1)
                            {
                                
                                let lengthArr = new Array(this.skilength.length)
                                lengthArr[i] = 1

                                var item = {id: this.payload.id, name: this.payload.name,
                                brand: this.payload.brand,
                                length: this.skilength[i].len,
                                price: this.payload.price,
                                quantity: 1 }

                                cart.items.push(item)

                                this.$cookies.set("cart", cart)

                            } else {


                                cart.items[index].quantity++

                                this.$cookies.set("cart", cart)
                                
                            }

                        } else {
                        
                            let lengthArr = new Array(this.skilength.length)
                            lengthArr[i] = 1

                            var cartInit = {items: [{id: this.payload.id, name: this.payload.name,
                            brand: this.payload.brand,
                            length: this.skilength[i].len,
                            price: this.payload.price,
                            quantity: 1}]}

                            this.$cookies.set(this.$cookies.set("cart", cartInit))
                        }
						
						console.log(this.$cookies.get("cart"))
					}
				}
			},
            
		}
		
	}
</script>

<style scoped>

.pcButton
{
	width: 40%;
	margin-right: 10%;
}

#price
{
	border: 1px solid #333;
}

#price > p
{
	color: #333;
}

#cartButton
{
	background-color: #333;
}

#cartButton > p
{
	color: #fff;
}

#priceCartHolder
{
	display: flex;
}

.Info
{
	padding-right: 10%;
}

.center 
{
	text-align: left;
	color: #333;
}

#length-b-holder {
	display: flex;
	margin-bottom: 50px;
	margin-top: 50px;
}

</style>
