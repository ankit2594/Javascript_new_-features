function makeAPromise() {
    return new Promise((resolve, reject) => {
        //async operation
        //XMLHTTP REquest
        var requestObj = new XMLHttpRequest();
        requestObj.onreadystatechange = function () {
            if (requestObj.readyState == 4 && requestObj.status == 200) {
                //success
                resolve(requestObj.responseText);//promise resolved
            }
            else if (requestObj.readyState == 4 && requestObj.status != 200) {
                //error
                reject(requestObj.statusText);//promise rejected
            }

        } // end of onReadyStateChange
        requestObj.open('GET', 'https://jsonplaceholder.typicode.com/posts');
        requestObj.send();// makes the ajax request
    })//end of promise
}