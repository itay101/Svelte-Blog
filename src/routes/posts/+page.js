import { fakeData as posts } from '../../lib/fake_db.js';

/** @type {import('./$types').PageLoad} */
export function load() {
	return {
		posts
	};
}
