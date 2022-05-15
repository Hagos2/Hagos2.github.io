"use strict";
window.onload = function () {
    const { Observable } = rxjs;
    function addEmployee(numberRequested) {
        const employeeDiv = document.getElementById("empDiv");
        employeeDiv.innerHTML = "";
        const { from } = rxjs;
        let index=1;
        from(getEmployee("https://randomuser.me/api?results=" + numberRequested))
        .subscribe((employeeList) => {
            employeeList.results.forEach((employee) => {
            const insertToDiv = `
                    <div class="row mb-1">     
                       <div class="col bg-secondary text-white">
                       <p>${index++}). ${employee.name.first} ${employee.name.last}</p>
                       </div>
                       <div class="col bg-secondary text-white">                       
                           <p><strong>Location</strong></p>
                           <p>
                           ${employee.location.street.number}                             
                           ${employee.location.street.name}
                          </p>
                           <p>
                           ${employee.location.city} ${employee.location.state} 
                           ${employee.location.country} ${employee.location.postcode}
                           </p>                                                                        
                       </div>
                    </div>     
                   `;
            let element = document.createElement("div");
            element.innerHTML = insertToDiv;
            employeeDiv.appendChild(element);
          });
        });
       
      }
      async function getEmployee(url) {
        let emps = await fetch(url);
        console.log(emps);
        return emps.json();
        
      }
    document.getElementById("refresh").addEventListener('click', function () {
        let emp = document.getElementById("empId");
        Observable.create(observer=>observer.next(addEmployee(emp.value)))
        .subscribe()
        });
  };
  