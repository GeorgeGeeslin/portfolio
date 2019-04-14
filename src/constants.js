export const tagColors = [
  /*BLUE*/
  "#0074D9",
  /*AQUA*/
  "#7FDBFF",
  /*TEAL*/
  "#39CCCC",
  /*OLIVE*/
  "#3D9970",
  /*GREEN*/
  "#2ECC40",
  /*LIME*/
  "#01FF70",
  /*YELLOW*/
  "#FFDC00",
  /*ORANGE*/
  "#FF851B",
  /*RED*/
  "#FF4136",
  /*MAROON*/
  "#85144b",
  /*FUCHSIA*/
  "#F012BE",
  /*PURPLE*/
  "#B10DC9",
  /*GRAY*/
  "#AAAAAA",
  /*SILVER*/
  "#DDDDDD",
]

export const getTagsWithCounts = posts => {
  let tagList = []
  let allTags = []
  let count, prev, listLength
  const numColors = tagColors.length

  posts.forEach(post => {
    if (post.node.frontmatter.hasOwnProperty("tags")) {
      const tags = post.node.frontmatter.tags
      allTags.push(...tags)
    }
  })

  allTags.sort()

  allTags.forEach(function(tag, index) {
    listLength = tagList.length
    if (listLength === 0 || tag !== prev) {
      tagList.push({ tag: tag, count: 1 })
      count = 1
    } else {
      count++
      tagList[listLength - 1].count = count
    }
    prev = tag
  })

  tagList.forEach(function(tag, index) {
    if (index < numColors) {
      tag.color = tagColors[index]
    } else {
      tag.color = tagColors[index - numColors]
    }
  })

  return tagList
}
