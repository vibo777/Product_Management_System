let products=[
    {name: "Boat Rockerz 400",price:999,quantity:1},
    {name: "JBL Sound Bar",price:4999,quantity:1},
];   // blank array for storing the products 


// Add Functionality to Product product  
function addProduct(){

    let product={};  // 1. first create one object  
    
    // 2. Assign properties & values to object(Getters :getting the value)
    product.name = document.getElementById('name').value;
    product.price = document.getElementById('price').value;
    product.quantity = document.getElementById('quantity').value;
    // console.log(product);
 
    // 3. Push object into an array 
    products.push(product);
    // console.log(products) // simply printing array to check array
    display();

    // to clear the input fields after inserting record (Setters:Setting the value)
    document.getElementById('name').value = "";
    document.getElementById('price').value = "";
    document.getElementById('quantity').value = "";



}

// Delete Functionality to remove products  
deleteProduct=(index)=>{
    products.splice(index,1);
    display();
}

// Functionality to Display the list of products
function display(){
    // important logic 

    let productString="";

    for(i=0;i<products.length;i++){
        productString +=`
        <tr>
            <td>${i+1}</td>
            <td>${products[i].name}</td>
            <td>${products[i].price}</td>
            <td>${products[i].quantity}</td>  
            <td>
                <button class="btn" onclick='setUpData(${i})'>Update</button>
                <button class="btn" onclick='deleteProduct(${i})'>Delete</button>
            </td>
        </tr>   
        `; 
    }
    document.getElementById('table_data').innerHTML = productString;
}    
display();
 
let updateIndex = null;

setUpData=(index)=>{

    document.getElementById('update_form').style.display="block";
    updateIndex = index;

    let product = products[index];    
     console.log(product);
  // dom manipulation 
  // 1. to fetch the element  

        document.getElementById('up_name').value = product.name;
        document.getElementById('up_price').value = product.price;
        document.getElementById('up_quantity').value = product.quantity;

}

updateProduct=()=>{
     
    let product={};    
     
    product.name = document.getElementById('up_name').value;
    product.price = document.getElementById('up_price').value;
    product.quantity = document.getElementById('up_quantity').value;

    products[updateIndex] = product;
    display();

    document.getElementById('up_name').value = "";
    document.getElementById('up_price').value = "";
    document.getElementById('up_quantity').value = "";

    document.getElementById('update_form').style.display="none";
    updateIndex = null; 
}











