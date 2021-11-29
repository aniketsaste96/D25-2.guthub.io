
//Get hold of Elements
var maindiv = document.querySelector(".container").innerHTML
const subdiv = document.getElementsByClassName("subcontainer")
const btn = document.querySelector(".btn")

//api Url 
const url = "https://dog.ceo/api/breeds/image/random"



//Fetch data on event
btn.addEventListener("click", () => {

    const fetchData = async () => {
        try {


            const response = await fetch(url);
            const Qdata = await response.json();


            //appending data to HTML
            let realData = Qdata
            document.querySelector(".img").innerHTML = ` <img src="${realData.message}"></img> `


            //Error Handling
        } catch (err) {
            console.log(err)
        }
    };
    //calling fecth function
    fetchData();

});






