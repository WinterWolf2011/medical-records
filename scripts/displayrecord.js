function addRow(event){
    event.preventDefault();

    const name = document.getElementById("name").value;
    const lvisit = document.getElementById("lvisit").value;
    const ltreat = document.getElementById("ltreat").value;

    if(!name || !lvisit || !ltreat){
        alert("Please Fill In the Field");
        return ;
    }
    const table = document.getElementById("tBody");
     
    const tr =document.createElement("tr");

    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");

    td1.textContent = name;
    td2.textContent = lvisit;
    td3.textContent = ltreat;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    table.appendChild(tr);

    name = " ";
    lvisit = " ";
    ltreat = " ";

}