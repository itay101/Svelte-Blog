import { fakeData } from '../../../lib/fake_db.js';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  const routeSlug = params.slug;
  const getSinglePost = fakeData.find(post => post.slug === routeSlug)
	return {
		post: getSinglePost
	};
}
