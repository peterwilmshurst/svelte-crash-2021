<script>
	import Feedbacklist from './components/feedbacklist.svelte';
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

	const deleteFeedback = (e) => {
		const itemId = e.detail
		feedback = feedback.filter((item) => item.id != itemId)
	}
</script>

<main class='container'>
	<Feedbacklist {feedback} on:delete-feedback={deleteFeedback} />
</main>
