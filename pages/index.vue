<template>
	<div class="page-container">
		<div class="page-container-inner">
			<div class="head-part">
				<div class="d-iamge"><img src="@/assets/images/logo_white.png"/></div>
				<div class="d-colab-x">X</div>
				<div class="d-colab-one-mega">MEGA</div>	
				<div class="d-colab-one-agent">AGENT</div>	
				<div class="d-colab-one-camp">CAMP</div>	
				<div class="d-colab-two">2022</div>	
				<div class="d-main-number-base">52</div>
				<div class="d-main-first-title">Challenges</div>
				<div class="d-main-second-title">What do you do?</div>
				<!-- <div class="d-with">with</div> -->
				
				
			</div>
			<div class="d-search-part">
				<!-- <h2>Are you having problems with?</h2> -->
				<select name="" id="" v-on:change="changeProblem($event)">
					<option :value="item.vid" v-for="(item, index) in issues" :key="index">{{item.name}}</option>
				</select>
			</div>
			<div class="d-video-part">
				<div class="d-form-now" v-if="showform">
					<div v-if="!show_thank_you" class="d-form-now-inner">
						<div class="show-video" v-if="!showVideoLoading">
							<div class="d-video-item" v-if="selectedVid != '' && selectedVid != 'none'">
								<iframe :src="selectedVid" width="100%" height="270" allow="autoplay"></iframe>
								<div class="disclaimer">*this video should not be reproduced</div>
							</div>
							<div class="d-text-item" v-if="selectedVid == ''">
								<iframe src="https://www.youtube.com/embed/Kp9qGrfF3Tg" width="100%" height="270" allow="autoplay"></iframe>
								<div class="disclaimer">*this video should not be reproduced</div>
								<!-- <p>Sign up right now to find out the answer and visit us on our both at both 709</p> -->
							</div>
						</div>
						<div class="show-loading-item" v-if="showVideoLoading">
							<v-progress-circular indeterminate color="white"></v-progress-circular>
						</div>
						<div class="d-form-instructions">Signup below and one of our amazing Growth Backer will call you right away to schedule your FREE business evaluation call.</div>
						<div class="d-form-item">
							<label for="">Full Name <span v-if="error_name" class="form-is-required">*required</span></label>
							<input type="text" v-model="form.name">
						</div>
						<div class="d-form-item">
							<label for="">Mobile Number <span v-if="error_mobile" class="form-is-required">*required</span></label>
							<input type="text" v-model="form.mobile">
						</div>
						<div class="d-form-item">
							<label for="">Email Address <span v-if="error_email" class="form-is-required">*required</span></label>
							<input type="text" v-model="form.email">
						</div>
						<div class="d-form-item">
							<label for="">Job Title</label>
							<input type="text" v-model="form.job_title">
						</div>
						<div class="d-form-item">
							<label for="">Industry <span v-if="error_email" class="form-is-required">*required</span></label>
							<select v-model="form.industry" @change="onIndustryChange($event)" name="" id="">
								<option value="Real estate agent">Real estate agent</option>
								<option value="Mortgage">Mortgage</option>
								<option value="Title">Title</option>
								<option value="CRM">CRM</option>
								<option value="Technology">Technology</option>
								<option value="Marketing/Social Media">Marketing/Social Media</option>
								<option value="Lead Generation">Lead Generation</option>
								<option value="Home Warranty">Home Warranty</option>
								<option value="Insurance">Insurance</option>
								<option value="E-commerce">E-commerce</option>
								<option value="Travel/Tourism">Travel/Tourism</option>
								<option value="Education">Education</option>
								<option value="Financial">Financial</option>
								<option value="Office/Administration">Office/Administration</option>
								<option value="Human Resources">Human Resources</option>
								<option value="Tax Consulting">Tax Consulting</option>
								<option value="Healthcare">Healthcare</option>
								<option value="Arts/Entertainment">Arts/Entertainment</option>
								<option value="Retail">Retail</option>
								<option value="Other">Other</option>
							</select>
							<!-- <input type="text" v-model="form.email"> -->
						</div>
						<div class="d-form-item" v-if="show_other_industry">
							<label for="">Other Industry</label>
							<input type="text" v-model="other_industry" placeholder="Enter other industry">
						</div>
						<!-- <div class="d-form-item">
							<label for="">State <span v-if="error_state" class="form-is-required">*required</span></label>
							<select name="" id="" v-model="form.state">
								<option :value="state" v-for="state in states" :key="state">{{state}}</option>
							</select>
						</div> -->
						<div class="d-form-item">
							<label for="">County <span v-if="error_county" class="form-is-required">*required</span></label>
							<input type="text" v-model="form.county">
						</div>
						<div class="d-form-item">
							<label for="">Country <span v-if="error_country" class="form-is-required">*required</span></label>
							<input type="text" v-model="form.country">
						</div>
						<div class="d-form-item submitform">
							<button v-on:click="submitForm();">Submit <span v-if="show_loading"><v-progress-circular indeterminate color="primary"></v-progress-circular></span></button>
							<div class="disclaimer-section">Disclaimer: Once you fill out this form, you are giving us permission to contact you and will send you emails about cyberbacker.</div>
						</div>
					</div>
					<div v-if="show_thank_you" class="d-main-form-inner thank-you-wrapper">
						<div class="d-thank-you-page">
							<h2>Congratulations for completing the first step!</h2>
							<div class="d-thank-you-content">
								<!-- <p>Please don't walk away from the tablet and expect a call shortly for your<br /><strong>Free Business Evaluation.</strong></p> -->
								<p>Please visit us on our both at both 709</p>
							</div>
						</div>
					</div>
				</div>
				<!-- <video :key="selectedVid" id="video" width="320" height="240" controls>
					<iframe :src="selectedVid" width="640" height="480" allow="autoplay"></iframe>
					<source  type='video/mp4'>
					Your browser does not support the video tag.
				</video>  -->
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	
	export default {
		name: 'IndexPage',
		
		data(){
			return {
				show_other_industry: false,
				show_thank_you: false,
				show_loading: false,
				error_name: false,
				error_email: false,
				error_mobile: false,
				error_state: false,
				error_county: false,
				error_country: false,
				showform: false,
				showVideoLoading: true,
				other_industry: '',
				form: {
					'name': '',
					'email': '',
					'mobile': '',
					'industry': '',
					'state': '',
					'county': '',
					'job_title': '',
					'country': '',
					'problem': '',
				},
				states: [
					'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
					'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
					'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 
					'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 
					'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
					'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 
					'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
				],
				selectedVid: 'none',
				issues: [
					{
						name: 'Please select a problem',
						vid: 'none',
					},
					{
						name: 'Updating ANY notes in the CRM. What to do?',
						vid: 'https://www.youtube.com/embed/cT089IAYIcY',
					},
					{
						name: 'I don’t want to hire a VA because they might STEAL all my data. What to do?',
						vid: 'https://www.youtube.com/embed/Mm-y6gJCcV4',
					},
					{
						name: 'I am not sure how I will know if I have the right person',
						vid: 'https://www.youtube.com/embed/bexpuKeY7_s',
					},
					{
						name: 'Retaining people',
						vid: 'https://www.youtube.com/embed/wB4MENoIQfY',
					},
					{
						name: 'I don’t know how to start working with someone virtually ',
						vid: 'https://www.youtube.com/embed/EZEl_3X8dCo',
					},
					{
						name: 'My first virtual assistant did not work',
						vid: 'https://www.youtube.com/embed/y8wbKQSLtyo',
					},
					{
						name: 'I don’t know how to train someone new',
						vid: 'https://www.youtube.com/embed/ReKP7zQAleg',
					},
					{
						name: 'Knowing the opportunities of your virtual assistant',
						vid: 'https://www.youtube.com/embed/h1KarNqossk',
					},
					{
						name: 'I am too busy to provide continuous training to my virtual assistant.',
						vid: 'https://www.youtube.com/embed/CQKcp5kDDc4',
					},
					{
						name: 'I don’t know what to leverage',
						vid: 'https://www.youtube.com/embed/4K7iq7dBlXY',
					},
					{
						name: 'I’m afraid I might hire a criminal',
						vid: 'https://www.youtube.com/embed/GbsobBiUtzs',
					},
					{
						name: 'I’m having a hard time saying no when a virtual assistant solicits',
						vid: 'https://www.youtube.com/embed/f45dU7y82Wg',
					},
					{
						name: 'I’m afraid I might hire someone and find out they\'re not perfectly fit with my business',
						vid: 'https://www.youtube.com/embed/p5JyUUcIG8s',
					},
					{
						name: 'Hiring virtually costs too much',
						vid: 'https://www.youtube.com/embed/RgtN-MQTJiM',
					},
					{
						name: 'I’ve had a lot of bad experience directly hiring virtual assistants',
						vid: 'https://www.youtube.com/embed/qRw56X7ODiI',
					},
					{
						name: 'The last time I hired a virtual assistant, we were not compatible.',
						vid: 'https://www.youtube.com/embed/emYrDmxzhCo',
					},
					{
						name: 'I’m afraid I might just get scammed if I hire a virtual assistant',
						vid: 'https://www.youtube.com/embed/5JWbDIRiugI',
					},
					{
						name: 'No database. What to do?',
						vid: 'https://www.youtube.com/embed/ArHoBXJ8u3g',
					},
					{
						name: 'Missing a lot of important calls. What to do?',
						vid: '',
					},
					{
						name: 'My admin/VA just quit. What do I do?',
						vid: 'https://www.youtube.com/embed/4zqLca5gGxI',
					},
					{
						name: 'I don’t track my leads. What do I do?',
						vid: 'https://www.youtube.com/embed/XAnSBG1Ra84',
					},
					{
						name: 'Not setting enough appointments',
						vid: '',
					},
					{
						name: 'Confirming and attending appointments',
						vid: '',
					},
					{
						name: 'Tracking where leads come from to establish ROI',
						vid: '',
					},
					{
						name: 'Converting leads to an appointment',
						vid: '',
					},
					{
						name: 'Protecting your lead generation focus time',
						vid: '',
					},
					{
						name: 'Implementing a systematic follow-up plan',
						vid: '',
					},
					{
						name: 'Taking the time to input a listing and upload photos',
						vid: '',
					},
					{
						name: 'Marketing to your database',
						vid: '',
					},
					{
						name: 'Missing important emails and text messages',
						vid: '',
					},
					{
						name: 'No social media presence',
						vid: '',
					},
					{
						name: 'Consistently marketing to database',
						vid: '',
					},
					{
						name: 'Missing deadlines for transactions',
						vid: '',
					},
					{
						name: 'Low Inventory of listings and leads',
						vid: '',
					},
					{
						name: 'Growing Online Competition From Listing Portals',
						vid: '',
					},
					{
						name: 'Adapting To Technology Trends',
						vid: '',
					},
					{
						name: 'Costly Lead Generation',
						vid: '',
					},
					{
						name: 'Cultivating A Database (nurturing leads)',
						vid: '',
					},
					{
						name: 'Tracking leads from different lead sources and check conversions',
						vid: 'https://www.youtube.com/embed/XAnSBG1Ra84',
					},
					{
						name: 'Not knowing where the deal is in the sales process',
						vid: '',
					},
					{
						name: 'Failing to leverage on referrals',
						vid: '',
					},
					{
						name: 'Managing paperwork',
						vid: '',
					},
					{
						name: 'Dealing with tons of rejections because they cannot handle objections',
						vid: '',
					},
					{
						name: 'Most people get into real estate with the expectation of having a lot of time',
						vid: '',
					},
					{
						name: 'Not marketing online',
						vid: '',
					},
					{
						name: 'Having a hard time Managing Your Clients Expectations (more on customer service)',
						vid: '',
					},
					{
						name: 'Dont Know How To Lead Generate',
						vid: '',
					},
					{
						name: 'Dont Understand How Or Where To Market Themselves And Their Business',
						vid: '',
					},
					{
						name: 'Todays buyers and sellers both want to self-service (hiring the right ISA)',
						vid: '',
					},
					{
						name: 'No money management',
						vid: '',
					},
					{
						name: 'No referral network with other agents (getting updates and status)',
						vid: '',
					},
					{
						name: 'Managing KW Command',
						vid: '',
					},
				]
			}
		},
		methods: {
			changeProblem(event){
				console.log(event.target.value)
				this.showVideoLoading = true;
				this.selectedVid = event.target.value;
				// this.form.problem = event.target.name;
				this.showform = (event.target.value == 'none' ? false : true);

				setTimeout(() => this.showVideoLoading = false, 1000)
			},
			onIndustryChange(event){
				console.log(event.target.value)
				if(event.target.value == 'Other'){
					this.show_other_industry = true;
				} else {
					this.show_other_industry = false;
				}
			},
			submitForm(){
			console.log('process info -> ', this.form);
			this.show_loading = true;

			// validation
			let isHasError = false;
			this.error_name = false;
			this.error_email = false;
			this.error_mobile = false;
			this.error_state = false;
			this.error_county = false;
			this.error_country = false;

			if(this.form.name == ''){
				this.error_name = true;
				isHasError = true;
			}

			if(this.form.email == ''){
				this.error_email = true;
				isHasError = true;
			}

			if(this.form.mobile == ''){
				this.error_mobile = true;
				isHasError = true;
			}

			// if(this.form.state == ''){
			// 	this.error_state = true;
			// 	isHasError = true;
			// }

			if(this.form.county == ''){
				this.error_county = true;
				isHasError = true;
			}

			if(this.form.country == ''){
				this.error_country = true;
				isHasError = true;
			}

			if(isHasError){
				this.show_loading = false;
				return;
			}

			if(this.show_other_industry){
				this.form.industry = this.other_industry;
			}

			// console.log('all fields has been filled -> ', this.form);
			

			// get tab number
			let dselectedtab = this.$route.query.tablet;
			// console.log(dselectedtab);
			this.form.gsheet_id = "Tablet "+dselectedtab;
			// this.form.problem = this.selectedVid;

			axios.post("https://be2.applytocyberbacker.com/api/fifty-two/savetogsheet", this.form)
    		.then((response) => {
				// console.log('saving response -> ', response);
				this.show_loading = false;
				this.show_thank_you = true;
			});
			
		},
		}
	}
</script>

<style>
	body {
		background: url('~@/assets/images/bg_black.png') no-repeat center center;
		background-size: cover;
		min-height: 100vh;
	}
	.main-container {
		max-width: 400px;
		margin: 0 auto;
	}
	.page-container {
		/* background: url('~@/assets/images/crash.png') no-repeat center center; */
		/* background: rgba(255, 255, 255, 0.3); */
		/* -webkit-backdrop-filter: blur(10px); */
		/* backdrop-filter: blur(10px); */
		margin: 20px;
		border-radius: 20px;
		
	}
	.page-container-inner {
		font-family: 'Roboto', sans-serif;
		/* padding: 20px; */
	}
	.d-main-first-title {
		font-weight: bold;
		color: #fff;
		text-transform: uppercase;
		font-size: 47px;
		margin-top: -34px;
		text-shadow: 0 0 20px #0095eb;
	}
	.d-main-number-base {
		font-size: 240px;
		font-weight: bold;
		letter-spacing: -10px;
		color: #fff;
		line-height: 1em;
		text-shadow: 0 0 20px #0095eb;
		margin-top: 40px;
	}
	.d-main-second-title {
		color: #fff;
		font-size: 66px;
		text-shadow: 0 0 20px #0095eb;
		font-family: 'Square Peg', cursive;
		transform: rotate(353deg);
		margin-top: -10px;
	}
	.d-form-item {
		margin-bottom: 18px;
	}
	.d-thank-you-page {
		color: #fff;
		text-align: center;
	}

	.d-thank-you-page h2 {
		margin-bottom: 15px;
	}
	.d-form-item label {
		display: block;
		font-size: 18px;
		line-height: 1em;
		/* font-weight: bold; */
		margin-bottom: 5px;
		color: #fff;
	}
	.d-form-item input {
		width: 100%;
		border: 1px solid #404b78;
		font-size: 16px;
		line-height: 1em;
		padding: 15px 15px;
		border-radius: 10px;
		box-shadow: 0 0 12px #0096eb;
		background: #fff;
	}
	.d-form-item select {
		width: 100%;
		border: 1px solid #404b78;
		font-size: 16px;
		line-height: 1em;
		padding: 15px 15px;
		border-radius: 10px;
		box-shadow: 0 0 12px #0096eb;
		background: #fff;
	}
	.d-text-item p {
		color: #fff;
		font-size: 19px;
		font-weight: bold;
		text-align: center;
	}
	.d-text-item {
		margin-bottom: 35px;
	}
	.d-form-item.submitform {
		text-align: center;
	}
	.d-form-item.submitform button {
		background: #0096eb;
		color: #fff;
		font-weight: bold;
		line-height: 1em;
		padding: 15px 40px;
		border-radius: 10px;
		margin-bottom: 15px;
	}
	.disclaimer-section {
		font-size: 14px;
		color: #fff;
	}
	.head-part {
		text-align: center;
		margin-top: 40px;
	}
	.head-part > * {
		/* display: inline-block; */
		vertical-align: middle;
		/* margin: 0 30px; */
	}
	.d-iamge {
		/* margin-bottom: 35px; */
	}
	.d-colab-x {
		color: #0095eb;
		font-weight: lighter;
		font-size: 30px;
		line-height: 1em;
		margin: 10px 0;
		text-shadow: 0 0 20px #0095eb;
	}
	.d-colab-one-mega {
		font-weight: bold;
		color: #fff;
		font-size: 115px;
		line-height: 1em;
		text-shadow: 0 0 20px #0095eb;
		margin-bottom: -20px;
	}
	.d-colab-one-agent {
		font-weight: bold;
		color: #fff;
		font-size: 100px;
		line-height: 1em;
		text-shadow: 0 0 20px #0095eb;
		margin-bottom: -20px;
	}
	.d-colab-one-camp {
		font-weight: bold;
		color: #fff;
		font-size: 115px;
		line-height: 1em;
		text-shadow: 0 0 20px #0095eb;
		margin-bottom: -20px;
	}
	.d-colab-two {
		font-size: 97px;
		line-height: 1em;
		color: #fff;
		font-weight: bold;
		letter-spacing: 24px;
		margin-top: -10px;
		text-shadow: 0 0 20px #0095eb;
	}
	.d-form-instructions {
		color: #fff;
		text-align: center;
		margin-bottom: 20px;
		margin-top: 35px;
	}
	.head-part .d-iamge img {
		width: 300px;
	}
	.head-part .d-rise {
		font-size: 130px;
		font-weight: 100;
		line-height: 1em;
	}
	.head-part .d-with {
		text-transform: uppercase;
		line-height: 1em;
		margin-bottom: 11px;
		font-size: 26px;
		font-weight: 300;
	}
	.head-part .d-sep {
		transform: rotate(35deg);
		font-size: 72px;
		line-height: 1em;
		font-weight: 100;
		margin-top: 0px;
	}
	.d-search-part {
		margin-top: 20px;
		text-align: center;
		padding: 20px 0;
	}
	.d-search-part h2 {
		font-size: 23px;
		font-weight: 300;
		text-transform: uppercase;
	}
	.d-search-part select {
		margin-top: 10px;
		width: 100%;
		text-align: -webkit-center;
		/* border: 1px solid #0095eb; */
		/* background: #0095eb; */
		background: url('~@/assets/images/streak.png') no-repeat center center;
		background-size: contain;
		color: #fff;
		font-size: 17px;
		padding: 21px 0;
		border-radius: 5px;
		font-weight: bold;
	}
	.d-video-part {
		margin-top: 30px;
		margin-bottom: 60px;
		/* padding: 0 20px; */
	}
	.d-video-part iframe {
		border: 0 none;
	}
	.disclaimer {
		font-size: 12px;
		color: #0492e2;
	}
	.show-loading-item {
		color: #fff;
		text-align: center;
	}
</style>
