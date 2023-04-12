console.log('app.js theke bolchi');
const loadData = async (dataLimit) => {
    let url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    displayData(data.data.tools, dataLimit);
    // console.log(dataLimit);
};

const displayData = (tools, dataLimit) => {
    // let sliced;
    if (dataLimit < 7) {
        sliced = tools.slice(0, 6);
        // console.log(sliced);
        // console.log('if e dhukechi');
    }
    else {
        sliced = tools.slice(6, 12);
    }
    const displaySection = document.getElementById('display-section');
    sliced.forEach(element => {
        
        const modalSection = document.createElement('section');
        modalSection.setAttribute('id',`modal-section-${parseInt(element.id)}`);
        modalSection.classList.add('hidden');
        // console.log(`modal-section-${parseInt(element.id)}`);
        // console.log(typeof element.id, element.id);
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg" src="${element.image}" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Features</h5>
                    </a>
                    <ol id="ordered-list" class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        ${element.features ? element.features.map(feature => `<li>${feature}</li>`).join('') : ''}
                    </ol>
                    <a onclick="openModal(${element.id})" href="#"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Details
                    </a>
                </div>
        </div>
        
        `;
        modalSection.innerHTML=`
        <div class="modal-container modal-section mt-8 mb-8 w-4/6 items-center justify-center mx-auto bg-slate-600">
            <button onclick="closeModal(${element.id})" class="bg-primary_btn p-2 font-semibold text-white">CLOSE</button>
            <div class="p-6 flex gap-3 ">
                
                <div class="bg-[#eb5757] px-3">
                    <p class="mb-3"></p>
                    <div class="flex gap-3 mb-3">
                        <div class="p-2 text-white font-semibold">
                            <h2>$10/month Basic</h2>
                        </div>
                        <div class="p-2 text-white font-semibold">
                            <h2>$50/month PRO</h2>
                        </div>
                        <div class="p-2 text-white font-semibold">
                            <h2>Contact us Enterprise</h2>
                        </div>
                    </div>
                    <div class="flex gap-5 justify-around">
                        <div>
                            <h1 class="mb-2">Features</h1>
                            <ol id="ordered-list" class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                             ${element.features ? element.features.map(feature   => `<li>${feature}</li>`).join('') : ''}
                            </ol>
                        </div>
                        <div>
                            <h1 class="mb-2">Integrations</h1>
                            <ul>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="p-4 text-center">
                    <img class="flex mx-auto mb-2" src="${element.image}" alt="">
                    <p></p>
                </div>
                
        </div>
        </div>
        
        `;
        displaySection.appendChild(newDiv);
        document.body.appendChild(modalSection);


    });
};

const onClick = (str) => {
    if (str === 'load-all') {
        loadData(10);
    }
    document.getElementById('see-more-btn').style.display = 'none';
}


const openModal = (id) => {
    console.log(typeof id, id);

    const modalId = 'modal-section-'+id;

    console.log(typeof modalId, modalId);
    document.getElementById(`${modalId}`).classList.remove('hidden');
}
const closeModal = (id) => {
    console.log(typeof id, id);

    const modalId = 'modal-section-'+id;

    console.log(typeof modalId, modalId);
    document.getElementById(`${modalId}`).classList.add('hidden');
}


loadData(6);