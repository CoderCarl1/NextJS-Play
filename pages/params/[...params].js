import React from 'react';
import { useRouter } from 'next/router'

const Page = () => {

  const router = useRouter();
  // params is an array of anything that has come through i./e. asdas.com/1/2/3/4/5 is an array [1,2,3,4,5]
  const {params} = router.query;
  console.log(params)
  return (
    <div>Notes {params} Page</div>
  )
}

export default Page