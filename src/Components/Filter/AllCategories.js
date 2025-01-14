import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div>
         {['HOODIE', 'T-SHIRT', 'SOUVENIRS','ALL'].map(category => <Filter key={category} category={category}/>)}   
        </div>
    )
}
export default AllCategories;