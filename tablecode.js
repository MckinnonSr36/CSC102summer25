let arrProblems = [
            ["Crowdstrike",2024, "$5.4B" ,"Misconfigured Server" ],
            ["Facebook",2019, "$5B" ,"Data Leak"],
            ["Equifax",2017, "$4B" ,"Unpatched Software"],
            ["Target",2013, "$2B" ,"Phishing Attack"],
            ["Sony",2011, "$171M" ,"Malware Attack"]
        ];
        // for loop to go through the array
        for (let i=0; i < arrProblems.length; i++){
            // create a new row
            let newRow = document.createElement("tr");
            // create 4 new cells
            let cell1 = document.createElement("td");
            let cell2 = document.createElement("td");
            let cell3 = document.createElement("td");
            let cell4 = document.createElement("td");
            // add data to the cells from the array
            cell1.innerHTML = arrProblems[i][0];
            cell2.innerHTML = arrProblems[i][1];
            cell3.innerHTML = arrProblems[i][2];
            cell4.innerHTML = arrProblems[i][3];
            // add the cells to the row
            newRow.appendChild(cell1);
            newRow.appendChild(cell2);
            newRow.appendChild(cell3);
            newRow.appendChild(cell4);
            // add the row to the table
            document.getElementById("tbldata").appendChild(newRow);

        }