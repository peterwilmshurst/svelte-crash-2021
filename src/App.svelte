<script>
	import FeedbackForm from './components/feedbackform.svelte';
	import FeedbackList from './components/feedbacklist.svelte';
	import FeedbackStats from './components/feedbackstats.svelte';
	let feedback = [
		{
			id: 1,
			rating: 10,
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nemo consequuntur, voluptas velit earum animi ratione magnam eius, nobis qui eligendi hic, vero inventore? Ab dolorem laborum fugiat aut voluptatem.', 
		},
		{
			id: 2,
			rating: 9,
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nemo consequuntur, voluptas velit earum animi ratione magnam eius, nobis qui eligendi hic, vero inventore? Ab dolorem laborum fugiat aut voluptatem.', 
		},
		{
			id: 3,
			rating: 8,
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nemo consequuntur, voluptas velit earum animi ratione magnam eius, nobis qui eligendi hic, vero inventore? Ab dolorem laborum fugiat aut voluptatem.', 
		}
	]

	$: count = feedback.length
	$: average = feedback.reduce((a, {rating}) => a + rating, 0) / feedback.length

	const addFeedback = (e) => {
		const newFeedback = e.detail
		feedback = [newFeedback, ...feedback]
	}

	const deleteFeedback = (e) => {
		const itemId = e.detail
		feedback = feedback.filter((item) => item.id != itemId)
	}
</script>

<main class='container'>
	<FeedbackForm on:add-feedback={addFeedback} />
	<FeedbackStats {count} {average} />
	<FeedbackList {feedback} on:delete-feedback={deleteFeedback} />
</main>
