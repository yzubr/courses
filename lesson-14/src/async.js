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

  async function fetchUsersById(userId) {
    const response = await fetch(`https://dummyjson.com/users/${userId}`)
    const user = await response.json()
    return user
  }

  async function obertka() {
    const posts = await fetchPosts()
    const arrayOfRetchFuctions = posts.map((post) => fetchUsersById(post.userId))
    const users = await Promise.all(arrayOfRetchFuctions)
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

  obertka()
}
)()
