import React from 'react'
import {Container, PostForm} from '../components'
function AddPost({post}) {
  return (
    <div className='py-8'>
        <Container>
            <PostForm props={post}/>
        </Container>
    </div>
  )
}

export default AddPost