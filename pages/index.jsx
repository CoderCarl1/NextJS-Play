/** @jsx jsx */ /** @jsxRuntime classic */ import { jsx } from "theme-ui";
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Browser from '../src/components/Browser'
const BrowserComponent = dynamic(() => import('../src/components/Browser'), {ssr: false})


 const Pages = ({content}) => (
  <div sx={{ height: `calc(100vh - 60px)`}}>
    <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
      <h1 sx={{fontSize: 8, my: 0}}>{content.title}</h1>
      <BrowserComponent />
      {/* <Browser /> */}
    </div>
  </div> 
)

export default Pages

export function getStaticProps(){
  return {
    props: {
      content: {
        title: 'This is my App'
      }
    }
  }
}