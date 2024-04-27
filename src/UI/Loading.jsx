import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

const Loading = ({height="40" , width="75"}) => {
  return <ThreeDots height={height} width={width} radius={9} color='#c58c3d' wrapperClass='flex-center gap-4' visible={true} />
}

export default Loading