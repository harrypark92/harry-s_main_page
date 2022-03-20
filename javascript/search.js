const googleSearch = document.querySelector('.googleSearch');
const googleSearchForm = document.querySelector('#googleSearchForm');
const naverSearch = document.querySelector('.naverSearch');
const naverSearchForm = document.querySelector('#naverSearchForm');


function handleGoogleSearch(event) {
    event.preventDefault();
    const Searching = googleSearch.value;
    googleSearch.value = "";
    window.open(
        `https://www.google.com/search?q=${Searching}`,
        '_blank'
      );
}

function handleNaverSearch(event) {
    event.preventDefault();
    const Searching = naverSearch.value;
    naverSearch.value = "";
    window.open(
        `https://search.naver.com/search.naver?query=${Searching}`,
        '_blank'
      );
}

googleSearchForm.addEventListener('submit',handleGoogleSearch);
naverSearchForm.addEventListener('submit',handleNaverSearch);