//TRAVERSE THE DOM:


//1. Use the firstElementChild property to print the h2 in the section to the console

    let section = document.getElementById('content');
    let firstEC = section.firstElementChild.innerHTML; 
    console.log(firstEC);

//2. Use the lastElementChild property to log the last paragraph in the section to the console

    let lastEC = section.lastElementChild.innerHTML;
    console.log(lastEC);

//3. Use the parentNode property to log the h2’s parent section to the console

    let h2 = document.getElementById('section-h2');
    let parent = h2.parentNode.nodeName;
    console.log(parent);

//4. Use the children property to log the group of child elements of the section to the console

    let childrenOf = section.children;
    console.log(childrenOf);

//TARGET NODES AND CHANGE CONTENT/ATTRIBUTES:

//1.Retrieve the content of the h1 node using innerHTML and log the content to the console

    let h1Node = document.getElementById('title');
    console.log(h1Node.innerHTML);

//2.Change the content actually shown on the page for the h1 node to “Updated Page Title” using innerHTML

    h1Node.innerHTML = "Updated Page Title";
    console.log(h1Node);

//3.Retrieve the value of the id attribute on h1 using firstElementChild and the element property id and log it to the console*/

    let header = document.getElementById('site-header');
    let headerChild = header.firstElementChild.nodeName;
    let headerChildAttribute = header.firstElementChild.getAttribute("id");
    console.log(headerChild);
    console.log(headerChildAttribute);

//4. Change the value of the id attribute on h1 to “new-title” using firstElementChild and the element property id

  let headerChange = header.firstElementChild.setAttribute("id","new-title");

//CHANGING ITEMS IN THE DOM

//1.Use the appendChild method to add a new <p> node inside the section.

    let newNode = document.createElement("p");
    let newP = document.createTextNode ("appendChild test");
    newNode.appendChild(newP);
    content.appendChild(newNode);

//2.Use the removeChild method to remove the <p> node in the aside

    let aside = document.getElementById('tangent');
    aside.removeChild(aside.firstElementChild);


//3.Use the replaceChild method to replace a the h2 in the section with an h3 with the value “New Heading”

    let h3New = document.createElement("h3");
    let textValue = document.createTextNode("New Heading");
    content.replaceChild(h3New,h2);