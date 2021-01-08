<template>
<div>
	<Header />
	<div id="title">
		<h2>{{ $route.params.type }}</h2>
		<h6>(20 results)</h6>
	</div>
	<FilterTool :type="$route.params.type" />
	<span></span>
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import FilterTool from '@/components/FilterTool.vue'

export default {
	name: 'Browse',
	components: {
		Header,
		FilterTool
	}
}
</script>

<style scoped>

#title
{
    display: flex;
    width: 90vw;
    margin-left: 5vw;
    border-bottom: 1px solid #000;
}

h6
{
    padding-left: 1vw;
    line-height: 2em;
}

</style>
