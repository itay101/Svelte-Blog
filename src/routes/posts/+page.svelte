<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<p>This is where the posts will live</p>

{#each data.posts as post}
<div class="flex gap-2 my-2">
  <h2 class="hover:underline"><a href="/posts/{post.slug}">{post.title}</a></h2>
  <p>{post.date}</p>
</div>
{/each}