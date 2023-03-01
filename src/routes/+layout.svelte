<script lang="ts">
	// Your selected Skeleton theme:
	import '@skeletonlabs/skeleton/themes/theme-rocket.css';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/all.css';

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
</script>

<div class="flex flex-col justify-between items-center ">
	<div class="my-4 text-center text-white" >
		<h1>
			<span
				class="bg-gradient-to-br from-primary-500 via-tertiary-500 to-secondary-500 bg-clip-text text-transparent box-decoration-clone"
			>
				WhenIsTrainStreaming
			</span>
		</h1>
		<p>A site for checking when Train will stream</p>
	</div>
	<slot />
	<!-- <AppShell>
		<svelte:fragment slot="footer">
			<div class="border border-white">
				jøsses
			</div>
		</svelte:fragment>
	</AppShell> -->
</div>
