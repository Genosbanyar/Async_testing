let tBody = document.querySelector(".body-table");
let deleteBtn = document.querySelector(".details");

async function dataFetch() {
  let responce = await fetch("https://fakestoreapi.com/products/");
  let datas = await responce.json();
  // console.log(datas[0]);
  for (let i = 0; i < datas.length; i++) {
    //console.log(datas[i]);
    tBody.innerHTML += `<tr onclick="fetchDataOne(${datas[i].id})">
    <td>${datas[i].id}</td>
    <td><img class="image" src="${datas[i].image}"></td>
    <td>${datas[i].title}</td>
    <td>$${datas[i].price}</td>
    </tr>
  `;
  }
}
dataFetch();
async function fetchDataOne(id) {
  let responce = await fetch("https://fakestoreapi.com/products/" + id);
  let data = await responce.json();
  deleteBtn.innerHTML = `<h2 class="text-center mt-4">Details</h2>
  <img
    src="${data.image}"
    class="w-100 h-20"
  />
  <hr />
  <p><span class="text-primary fw-bold">Title - </span>${data.title}</p>
  <p><span class="text-primary fw-bold">Description - </span>${data.description}</p>
  <p><span class="text-primary fw-bold">Category - </span>${data.category}</p>
  <p><span class="text-primary fw-bold">Price - </span>$${data.price}</p>
  <p><span class="text-primary fw-bold">Rating - </span>${data.rating.rate}</p>
  <div class="btn btn-warning">Want to buy</div>
  <div class="btn btn-outline-danger" onclick="deleteDiv()">
    Delete
  </div>`;
}
function deleteDiv() {
  deleteBtn.classList.add("d-none");
}

// let getTodo = (resource) => {
//   return new Promise((resolve, reject) => {
//     let request = new XMLHttpRequest();
//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4 && request.status === 200) {
//         let datas = JSON.parse(request.responseText);
//         resolve(datas);
//       } else if (request.status === 404) {
//         reject("Something's going wrong");
//       }
//     });
//     request.open("GET", resource);
//     request.send();
//   });
// };
// getTodo("bnt.json")
//   .then((data) => {
//     console.log(data);
//     return getTodo("bnt.json");
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

fetch("bnt.json")
  .then((response) => {
    if (response.status === 404) {
      throw new Error("ur link is not availble");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err.message);
  });

let getJson = async () => {
  let response = await fetch("bnt.json");
  if (response.status === 404) {
    throw new Error("No found page");
  }
  let datas = await response.json();
  return datas;
};

getJson()
  .then((datas) => {
    console.log(datas);
  })
  .catch((err) => {
    console.log(err.message);
  });
