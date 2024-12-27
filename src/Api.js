export const fetchProducts = async () => {
    try {
       const response = await fetch('/product.json');
       const data = await response.json();
       return data 
    } catch (error) {
        throw error
    }
}

export const fetchsingleProduct = async (title) => {
    try {
       const response = await fetch('/product.json');
       const data = await response.json();
       const product = data.find(product => product.title === title)
       return product
    } catch (error) {
        throw error
    }
}