import { Link, routes } from '@redwoodjs/router'
import GeneralLayout from 'src/layouts/GeneralLayout'
import { Parallax } from 'react-parallax'
import BlogCardCell from 'src/components/BlogCardCell/BlogCardCell'
const BlogHomePage = () => {
  return (
    <GeneralLayout>
      <Parallax
        bgImage="/Blocks.jpg"
        className=""
        strength={300}
        bgImageStyle={{ opacity: '.9' }}
        bgStyle={{ filter: 'brightness(40%)' }}
      >
        <div style={{ height: 300 }}>
          <div
            style={{
              padding: 20,
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              opacity: '.95',
            }}
            className=" rounded font-medium bg-yellow-700 "
          >
            <div className="text-center ">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-100">
                Our Knowledge
              </h1>
              <h2 className="text-xs text-yellow-500 tracking-widest font-medium title-font mb-1">
                YOUR FOUNDATION
              </h2>
            </div>
          </div>
        </div>
      </Parallax>
      <BlogCardCell page={1} page_size={20} exclude_body={true} />
    </GeneralLayout>
  )
}

export default BlogHomePage
