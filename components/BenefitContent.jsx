const BenefitContent = ({ item }) => {
  return (
    <div className="flex flex-col mb-8">
      <div className="flex flex-row items-center mb-6">
        <span className="mr-8 border rounded-full py-4 px-6 text-white text-2xl" style={{ backgroundColor: `${item.idColor}` }}>{item.id}</span>
        <h3 className="text-xl font-bold">{item.title}</h3>
      </div>

      <div className="mb-6">
        <p className="text-xl font-light">{item.description}</p>
      </div>

      <div>
        <ul className="list-disc pl-4 md:pl-12">
          {item.facts.map((fact, index) => (
            <li key={index} className="text-xl font-light">{fact}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BenefitContent