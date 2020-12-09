import Layout from '../components/Layout'
import CommonHeroBlock from '../components/Blocks/CommonHeroBlock'
import MovieListBlock from '../components/Blocks/MovieListBlock'

const IndexPage = () => (
  <Layout showFooter={true}>
    <div className="buster-light">
      <CommonHeroBlock />
      <MovieListBlock />
    </div>
  </Layout>
)

export default IndexPage
