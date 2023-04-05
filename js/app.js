console.log('app.js theke bolchi');
const loadData = async(dataLimit) => {
    let url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    displayData(data.data.tools,dataLimit);
    console.log(dataLimit);
};

const displayData = (tools,dataLimit) => {
    // let sliced;
    if(dataLimit < 7){
        sliced = tools.slice(0,6);
        // console.log(sliced);
        // console.log('if e dhukechi');
    }
    else{
        sliced=tools.slice(6,12);
    }
    const displaySection = document.getElementById('display-section');
    sliced.forEach(element => {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg" src="${element.image}" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${element.name}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise
                        technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="#"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </a>
                </div>
            </div>
        `;
        displaySection.appendChild(newDiv);
    });
};

const onClick = (str) => {
    if(str === 'load-all'){
        loadData(10);
    }
    document.getElementById('see-more-btn').style.display = 'none';
}


loadData(6);