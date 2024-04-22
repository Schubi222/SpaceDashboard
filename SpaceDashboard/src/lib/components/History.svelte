<script lang="ts">
	import type { HistoryResponse } from '$lib/types/spacex/apiResponse';
	import moment from 'moment';

	export let history: HistoryResponse;
</script>

<div class="history">
	<div class="time">{moment.utc(history.event_date_unix * 1000).format('YYYY')}</div>
	<div class="description">{history.title}</div>
	<div class="description long">{history.details}</div>
</div>

<style lang="scss">
	.history {
		width: 80px;
		height: 400px;
		transition: 0.4s;
		box-shadow: 0 1px 2px var(--blue-5);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 30px;
		background: var(--grey-10);
		box-sizing: border-box;
		padding: 0 10px 10px 10px;
		color: var(--blue-2);
		overflow-y: auto;
		overflow-x: hidden;

		.time {
			width: 60px;
			min-height: 60px;
			border-radius: 1000px;
			background: white;
			box-shadow: 0 1px 2px 1px var(--blue-5);
			font-weight: bold;
			font-size: 1.5rem;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 10px;
		}
		.description {
			display: none;
		}
		.long {
			display: none;
		}
		&:hover {
			width: 200px;
			.description {
				display: unset;
			}
			.long {
				display: unset;
			}
		}
	}
</style>
