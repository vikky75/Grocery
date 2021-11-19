function groceryTable() {
    var grocery = [
    {
    "Sl_no":"1",
    "Name":"Apple",
    "Quantity":"1",
    "unit":"Kg",
    "Department":"Fruits",
    "Notes":"Fresh"
},

{
    "Sl_no":"2",
    "Name":"Rice",
    "Quantity":"10",
    "unit":"Kg",
    "Department":"Grocery",
    "Notes":"Min quantity 5Kg"
},

{
    "Sl_no":"3",
    "Name":"carrot",
    "Quantity":"1",
    "unit":"Kg",
    "Department":"Vegetables",
    "Notes":"Fresh"
},
{
    "Sl_no":"4",
    "Name":"Orange",
    "Quantity":"1",
    "unit":"kg",
    "Department":"Fruits",
    "Notes":"Fresh"
},
{
    "Sl_no":"5",
    "Name":"Banana",
    "Quantity":"1",
    "unit":"Kg",
    "Department":"Fruit",
    "Notes":"fresh"
},
{
    "Sl_no":"6",
    "Name":"strawberry",
    "Quantity":"1",
    "unit":"Kg",
    "Department":"Fruit",
    "Notes":"Fresh"
},
{
    "Sl_no":"7",
    "Name":"Sunflower oil",
    "Quantity":"1",
    "unit":"L",
    "Department":"Grocery",
    "Notes":"---"
},
{
    "Sl_no":"8",
    "Name":"Miranda",
    "Quantity":"1",
    "unit":"L",
    "Department":"bakery",
    "Notes":"---"
},
{
    "Sl_no":"9",
    "Name":"Cake",
    "Quantity":"1",
    "unit":"Kg",
    "Department":"Bakery",
    "Notes":"Home made"
},
{
    "Sl_no":"10",
    "Name":"Buiscuit",
    "Quantity":"1",
    "unit":"Packet",
    "Department":"Bakery",
    "Notes":"---"
}
    ]

    // EXTRACT VALUE FOR HTML HEADER. 
    // ('Book ID', 'Book Name', 'Category' and 'Price')
    let col = [];
    for (var i = 0; i < grocery.length; i++) {
        for (var key in grocery[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    let tr = table.insertRow(-1);                   // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < grocery.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            let tabCell = tr.insertCell(-1);
            tabCell.innerHTML = grocery[i][col[j]];
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    let divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}