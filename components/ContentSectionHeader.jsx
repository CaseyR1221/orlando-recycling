const ContentSectionHeader = ({ header }) => {
  return (
    <div className='border-l-[8px] border-blue-800 pl-6 py-6'>
        <h2 className='text-2xl md:text-4xl font-light'>{header}</h2>
    </div>
  )
}

export default ContentSectionHeader