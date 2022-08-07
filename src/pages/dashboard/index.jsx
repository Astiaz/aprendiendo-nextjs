import { Chart } from '@common/chart';
  
  export default function Dashboard() {

    
    const categoryNames = products?.map((product) => product.category); //Extraemos nombre de categorias con sus elementos
    const categoryCount = categoryNames?.map((category) => category.name); //Contamos los nombres de las categorias

    const countOcurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev),{}); 
    // iteramos por cada una para sumar cuantas ocurrencias hay de una categoria
    // const countOcurrences = (Array, value) => Array.reduce((a, v) => (v === value ? a + 1 : a), 0);

    const data = {
      datasets: [{
        label: 'Categories',
        data: countOcurrences(categoryCount),
        borderWidth: 2,
        backgroundColor: ['#ffbb11', '#c0c0c0', '#50AF95', '#F3BA2F', '#2A71D0']
      }]
    };

    return (
      <>
        <Chart className="mb-8 mt-2" chartData={data}/>
      </>
    );
}
