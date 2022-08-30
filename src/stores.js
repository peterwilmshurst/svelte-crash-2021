import { writable } from 'svelte/store'

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nemo consequuntur, voluptas velit earum animi ratione magnam eius, nobis qui eligendi hic, vero inventore? Ab dolorem laborum fugiat aut voluptatem.'
  },
  {
    id: 2,
    rating: 9,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nemo consequuntur, voluptas velit earum animi ratione magnam eius, nobis qui eligendi hic, vero inventore? Ab dolorem laborum fugiat aut voluptatem.'
  },
  {
    id: 3,
    rating: 8,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nemo consequuntur, voluptas velit earum animi ratione magnam eius, nobis qui eligendi hic, vero inventore? Ab dolorem laborum fugiat aut voluptatem.'
  }
])
