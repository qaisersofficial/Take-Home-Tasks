import Layout from './Layout'

const LoadingSpinner = ({ message = 'Loading...', fullPage = true }) => {
  const content = (
    <div className="text-white text-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#4EA8DE] mx-auto mb-4"></div>
      <h1 className="text-3xl font-bold text-gray-600 mb-4 animate-pulse">{message}</h1>
      <p className="text-gray-400">Please wait while we fetch your data.</p>
    </div>
  )

  if (fullPage) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[50vh]">
          {content}
        </div>
      </Layout>
    )
  }

  return content
}

export default LoadingSpinner