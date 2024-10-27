const DropoffLocation = ({ name, address}) => {
  return (
    <div className="relactive flex flex-col pb-6">
        <h3 className="text-2xl font-bold pb-4">{name}</h3>
        <p>{address}</p>
    </div>
  )
}

export default DropoffLocation