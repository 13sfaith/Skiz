<template>
  <div class="home">
	<Header />
	<img id="welcome" alt="Skiz" src="../assets/home/welcome.jpg"/>

	<!-- About us section -->
	<div id="about-holder">
		<div id="text-holder">
			<h2>About Us</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
		</div>

		<img alt="Ski picture" src="../assets/home/about.jpg"/>
	</div>

	<!-- Selection section -->
	<div id="select-holder">
		<div id="a">
			<h1>WHICH</h1>
		</div>
		<div id="b">
			<img alt="b" src="../assets/home/select/b.jpg"/>
		</div>
		<div id="c">
			<img alt="c" src="../assets/home/select/c.jpg"/>
		</div>
		<div id="d">
			<h1>ARE</h1>
		</div>
		<div id="e">
			<h1>YOU?</h1>
		</div>
		<div id="f">
			<img alt="f" src="../assets/home/select/f.jpg"/>
		</div>
	</div>
    <!--
	<Footer />

    <HelloWorld msg="Welcome to Your Vue.js App"/>
    -->
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
//import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
	Header,
  }
}
</script>

<style scoped>

#welcome
{
	max-width: 100vw;
}

#about-holder
{
	display: flex;
}

#about-holder > #text-holder
{
	max-width: 50vw;
}

#about-holder > #text-holder > p
{
	padding-right: 20%;
	padding-left: 20%;
}

#about-holder > img
{
	width: 50vw;
}

#select-holder
{
	display: grid;
	grid-template-columns: 50vw 50vw;
	grid-template-rows: calc(100% / 3) calc(100% / 3) calc(100% / 3); 

	background-color: #222;
}

#select-holder > div > img
{
	max-width: 50vw;
	max-height: 100%;
}

#select-holder > div > h1
{
	text-align: center;
	padding-top: 15%;
	line-height: 0%;
	font-size: 10vw;
	color: #fff;
}

</style>
