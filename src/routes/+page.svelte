<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';
	import { LightSwitch } from '@skeletonlabs/skeleton';

	export let data: PageData;

	const trainData = data.trainResult.data[0];
	const streamData = data.streamResult.data[0];

	console.log(trainData);
	console.log(streamData);

	function FormatDate(date: string) {
		const split = date.replace('Z', '');
		const date_1 = new Date(split);
		return new Intl.DateTimeFormat('en', { dateStyle: 'short', timeStyle: 'medium' }).format(
			date_1
		);
	}
</script>

<div class="text-center w-full text-white">
	<!-- three divs -->
	<div class="flex flex-row justify-between p-4  flex-wrap">
		<!-- img and info div -->
		<div class="flex flex-col justify-start items-center ">
			<h3>TrainWrecksTV</h3>
			<Avatar src="train.png" width="w-36 " />
			<div class="text-left my-8">
				{#if trainData.is_live === false}
					<h4>Time since last streamed: <span class="text-orange-400-500">Not live</span></h4>
				{:else}
					<h4>
						Time since last streamed: <span class="text-green-500"
							>{FormatDate(trainData.started_at)}</span
						>
					</h4>
				{/if}
				<h4>Time until next stream: Unknown</h4>
			</div>
		</div>

		<div class="">
			{#if trainData.is_live === false}
				<h1 class="text-red-500">Train is not live</h1>
			{:else}
				<h1 class="text-green-500">Train is live</h1>
				<div class=" mt-8">
					<h4 class="text-xl text-yellow-400">Title:</h4>
					<h4 class="mb-8">{streamData.title}</h4>

					<h5 class="text-xl text-yellow-400">Category:</h5>
					<h3 class="mb-8">{streamData.game_name}</h3>

					<h4 class="mb-8">
						<span class="text-yellow-400">{streamData.viewer_count}</span> people watching
					</h4>
					<h5 class="text-xl text-yellow-400">Started:</h5>
					<h3 class="mb-8">{FormatDate(streamData.started_at)}</h3>

					<a
						class="btn bg-secondary-500-500 variant-filled-tertiary text-2xl "
						href="https://www.twitch.tv/trainwreckstv"
					>
						Watch on Twitch
					</a>
				</div>
			{/if}
		</div>

		<!-- feed div -->
		<div class="">
			<a
				class="twitter-timeline"
				data-width="350"
				data-height="600"
				data-theme="dark"
				href="https://twitter.com/Trainwreckstv?ref_src=twsrc%5Etfw">Tweets by Trainwreckstv</a
			> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
		</div>
		<!-- video div -->
	</div>
	<!-- <div class="flex flex-row justify-evenly">
		{#each clips as clip}
			
			<iframe src={clip.embed_url+parent_string} height="350" width="350" allowfullscreen />
		{/each}
	</div> -->
</div>
