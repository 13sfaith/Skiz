<template>

<div id="holder">
	<div id="filter-holder">
		<div id = "title" class = "sep holder">
			<h3>Filter</h3>
		</div>
		
		<div id = "brand" class = "sep holder">
			<h5>Brand</h5>
			
			<input type="checkbox" name="brand1">
			<label for="brand1">Volkl</label><br>
			
			<input type="checkbox" name="brand2">
			<label for="brand2">Armada</label><br>
			
			<input type="checkbox" name="brand2">
			<label for="brand2">DPS Skis</label><br><br>

            <Toggle />
		</div>
		
		<div id="length" class="holder">
			<h5>Ski Length (cm)</h5>
			
			<input type="checkbox" name="length1">
			<label for="length1">150-159</label><br>
			
			<input type="checkbox" name="length2">
			<label for="length2">160-169</label><br>
			
			<input type="checkbox" name="length3">
			<label for="length3">170-179</label><br>
			
			<input type="checkbox" name="length4">
			<label for="length4">180-189</label><br>
		</div>
	</div>

	<ItemManager :payload="info"/>
</div>

</template>

<style scoped>

#filter-holder
{
    width: 15vw;
	margin-left: 5vw;    
	text-align: left;
}

#holder
{
	display: flex;
}

.sep
{
    border-bottom: 1px solid #000;
    width: 80%;
}

</style>


<script>
import ItemManager from '@/components/ItemManager.vue'
import Toggle from '@/components/Toggle.vue'

export default {

	name: 'FilterTool',
	components: {
      ItemManager,
      Toggle
	},
	props: {
		type: String,
	},
	data() {
		return { info : [] }
	},
	mounted() {
		fetch(`http://localhost:3000/api/browse/${this.type}`)
                .then(res => res.json())
                .then(payload => this.info = payload)
                .then(this.popfill())
    },
    methods: {
        popfill() {
            console.log("hoorah")
        }
    }
}


</script>
