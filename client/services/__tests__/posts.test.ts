import { getAllPostIds, getPostData, getSortedPostsData } from '../posts'

jest.mock('fs', () =>  {
  return {
    readdirSync: jest.fn().mockImplementation(() => {
      return ['test.md', 'test2.md']
    }),
    readFileSync: jest.fn().mockImplementation(() => {
      return `title: "Two Forms of Pre-rendering"
      date: "2020-01-01"`
    })
  }
})

jest.mock('remark', () => {
  return {
    remark: jest.fn().mockImplementation(() => {
      return {
        use: jest.fn().mockImplementation(() => {
          return {
            process: jest.fn().mockImplementation(() => {
              return '# Two Forms of Pre-rendering'
            })
          }
        })
      }
    }),
    use: jest.fn(),
    process: jest.fn().mockImplementation(() => {
      return '# Two Forms of Pre-rendering'
    })
  }
})

jest.mock('remark-html', () => {
  return {
    html: jest.fn()
  }
})

describe('posts', () => {
  describe('getSortedPostsData', () => {
    it('should return sorted posts data', () => {
      const posts = getSortedPostsData()

      expect(posts).toEqual([
        { id: 'test2' },
        { id: 'test' }
      ])
    })
  })

  describe('getAllPostIds', () => {
      it('should return an array of ids', () => {
        const postIds = getAllPostIds()

        expect(postIds).toEqual([
          { params: { id: 'test' } },
          { params: { id: 'test2' } }
        ])
      })
  })

  describe('getPostData', () => {
      it('should return the full post', async () => {
        const post = await getPostData('test')

        expect(post).toEqual({
          content: "# Two Forms of Pre-rendering",
          id: "test"
        })
      })
  })
})