(async () => {
  async function fetchPostById(id) {
    const response = await fetch(`https://dummyjson.com/posts/${id}`)
    const post = await response.json()
    return post
  }

  async function fetchPosts() {
    const posts = await Promise.all([
      fetchPostById(1),
      fetchPostById(2)
    ])
    return posts
  }

  async function fetchUserById(userId) {
    const response = await fetch(`https://dummyjson.com/users/${userId}`)
    const user = await response.json()
    return user
  }

  async function fetchPostsWithUsers() {
    const posts = await fetchPosts()
    const arrayOfFetchFuctions = posts.map((post) => fetchUserById(post.userId))
    const users = await Promise.all(arrayOfFetchFuctions)
    console.log(users)
    console.log(posts.map((post, index) => {
      const result = {
        id: post.id,
        title: post.title,
        user: {
          id: users[index].id,
          fullName: `${users[index].firstName} ${users[index].lastName}`
        }
      }
      return result
    }))
  }

  fetchPostsWithUsers()
}
)()
