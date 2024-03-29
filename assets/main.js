const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCzSSsHwz_fHf3Rdw0eQfBgg&part=snippet%2Cid&order=date&maxResults=9';
let content = null || document.getElementById('content');

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ab5ff3e0camshcc5181c97c71976p153251jsn8391d8370682',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
            ${videos.items.map(video => `
                <div class="group relative">
                    <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                    </div>
                    <div class="mt-4 flex justify-between">
                    <a href="https://youtube.com/watch?v=${video.id.videoId}" target="_blank">
                    <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                    </h3>
                    </a>
                </div>
            </div>
    `).slice(0, 8).join('')}
    `;
    content.innerHTML = view ;
    } catch (error) {
        console.log(error);
    }
})();