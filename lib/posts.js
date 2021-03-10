
export function getSortedPostsData() {
  // Get file names under /posts
  const allPostsData = [{id: "Pre-rendering", title: 'Two forms pre-rendering', date: '2021-01-01'}, {id: "ssg-ssr", title: 'When to Use Static Generation v.s. Server-side Rendering', date: "2021-01-01"}]
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
    
    // Returns an array that looks like this:
    return [
      {
        params: {
          id: 'ssg-ssr'
        }
      },
      {
        params: {
          id: 'pre-rendering'
        }
      }
    ]
  }


  export function getPostData(id) {
      console.log('getPostData');
    const allPostsData = [{id: "Pre-rendering", title: 'Two forms pre-rendering', date: '2021-01-01'}, {id: "ssg-ssr", title: 'When to Use Static Generation v.s. Server-side Rendering', date: "2021-01-01"}]
    return allPostsData.filter(x => x.id.toLowerCase() === id)[0];
  }
  