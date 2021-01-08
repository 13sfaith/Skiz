<template>
<div id="footer-holder">
	
	<div id="newsletter-holder">
		<div id="form">
			<form>
				<input type="text" placeholder="email..."/>
				<button>Subscribe</button>
			</form>
		</div>
		<!-- <div id="split"></div> -->
		<div id="info">
			<h3>NEWSLETTER</h3>
			<p>Subscribe to our newsletter.</p>
		</div>
	</div>
	
	<footer>
		<hr/>
		
		<div id="info-holder">
			<div id="social-holder">
				<h2 id="comp-title">SKIZ</h2>
				<div id="socials">
					<a><p>T</p></a>
					<a><p>G</p></a>
					<a><p>S</p></a>
				</div>
			</div>
			<p>COPYRIGHT</p>
		</div>
	</footer>

</div>
</template>

<style scoped>
#footer-holder
{
	height: 25vh;
}

#newsletter-holder
{
	display: flex;
	justify-content: space-between;
	height: calc(100% / 2);
	
	background-color: #111;
}

/*
#split
{
	height: 100%;
	width: 1px;
	background-color: #fff;
}
*/

#newsletter-holder
{
	color: #fff;
}

#newsletter-holder > #form
{
	/*
	padding-top: 2em;
	padding-left: 1em;
	*/
	margin-top: 2em;
	width: 50vw;
}

#newsletter-holder > #form > form > input
{
	width: 50%;
	padding: 2%;
	font-size: 80%;
	border: none;
}

#newsletter-holder > #form > form > button
{
	width: 30%;
	font-size: 80%;
	padding: 2%;
	border: none;
}

#newsletter-holder > #info
{
	width: 50vw;
	text-align: center;
	border-left: 1px solid #fff;
}

footer > #info-holder
{
	display: flex;
	flex-direction: column;
}

#social-holder
{
	display: flex;
	justify-content: space-between;
}

#socials
{
	display: flex;
	width: 30%;
	justify-content: space-evenly;
}

#socials > a > p
{
	padding-right: 50%;
}

#info-holder > p
{
	text-align: right;
	padding-right: 5%;
}

#comp-title
{
	font-family: 'Reenie Beanie', cursive;
    font-size: 55px;
    line-height: 0px;
    position: relative;
    top: -25px;
}
</style>

<script>
export default {
	name: 'Footer',
	props: {},
}
</script>
