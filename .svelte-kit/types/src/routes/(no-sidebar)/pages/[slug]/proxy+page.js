// @ts-nocheck
// src/routes/components/[slug]/+page.js
/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export async function load({ params }) {
	const post = await import(`../${params.slug}.svelte`);
	// const { title, dir } = post.metadata;
	const content = post.default;

	return {
		content
		// title,
		// dir
	};
}
