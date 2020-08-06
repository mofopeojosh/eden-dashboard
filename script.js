let mealModalOpener = document.querySelector('#mealModalOpener');
mealModalOpener.onclick = () => handleMealModal('open');

let mealModalCloser = document.querySelector('#mealModalCloser');
mealModalCloser.onclick = () => handleMealModal('close');

let dishModalOpener = document.querySelector('#dishModalOpener');
dishModalOpener.onclick = () => handleDishModal('open');

let dishModal = document.querySelector('#dishModal');
dishModal.onclick = (e) => {
    if(e.target !== document.querySelector('#dishModal img')){
        handleDishModal('close');
    }
};

let timingOptions = {
    easing: 'ease-in-out',
    duration: 700,
};

let modalStart = {
    background: 'transparent',
};
let modalEnd = {
    background: 'rgba(0,0,0,0.9)',
};

function handleMealModal(action) {
    let btn = document.querySelector('#mealModalOpener');
    let offsetTop = btn.offsetTop;
    let offsetHeight = btn.offsetHeight;
    let offsetWidth = btn.offsetWidth;
    let mealModal = document.querySelector('#mealModal');

    let mealModalContent = document.querySelector('#mealModalContent');
    let mealModalContentStart = {
        height: offsetHeight + 'px',
        width: offsetWidth + 'px',
        marginTop: offsetTop + 'px',
        opacity: 0,
    };
    let mealModalContentEnd = {
        height: '100%',
        width: '100%',
        marginTop: 130 + 'px',
        opacity: 1,
    };

    let mealItems = document.querySelectorAll('.meal-item');
    let mealItemsEnd = {
        marginTop: '0px',
        marginLeft: '0px',
    };

    if (action === 'open') {
        openMealModal();
    }
    if (action === 'close') {
        closeMealModal();
    }

    function openMealModal() {
        mealModal.style.display = 'block';

        mealModal.animate([
            modalStart,
            modalEnd
        ], timingOptions);

        mealModalContent.animate([
            mealModalContentStart,
            mealModalContentEnd
        ], timingOptions);

        mealItems.forEach(mealItem => {
            let firstMealItemOffset = mealItems[0].offsetTop;
            let offsetTop = mealItem.offsetTop;
            let mealItemsStart = {
                marginTop: '-' + Math.abs(offsetTop - firstMealItemOffset) + 'px',
                marginLeft: '-' + 20 + 'px',
            };

            mealItem.animate([
                mealItemsStart,
                mealItemsEnd
            ], timingOptions);
        });
    }

    function closeMealModal() {
        let mealModal = document.querySelector('#mealModal');

        mealModal.animate([
            modalEnd,
            modalStart
        ], timingOptions);

        mealModalContent.animate([
            mealModalContentEnd,
            mealModalContentStart,
        ], timingOptions);

        let offsetDiff = 0;
        mealItems.forEach(mealItem => {
            let firstMealItemOffset = mealItems[0].offsetTop;

            let mealItemsStart = {
                marginTop: '-' + Math.abs((mealItem.offsetTop - firstMealItemOffset) - offsetDiff) + 'px',
                marginLeft: '-' + 20 + 'px',
            };
            offsetDiff = mealItem.offsetTop - firstMealItemOffset;

            mealItem.animate([
                mealItemsEnd,
                mealItemsStart
            ], timingOptions);
        });

        setTimeout(() => {
            mealModal.style.display = 'none';
        }, 700);
    }
}

function handleDishModal(action) {

    let dishButton = document.querySelector('#dishModalOpener');
    let offsetTop = dishButton.getBoundingClientRect().top;
    let offsetHeight = dishButton.offsetHeight;
    let offsetWidth = dishButton.offsetWidth;

    let dishModalImage = document.querySelector('#dishModalContent img');
    let dishModalImageStart = {
        opacity: 0.2,
        height: offsetHeight + 'px',
        width: offsetWidth + 'px',
        marginTop: (offsetTop - 100) + 'px',
        marginLeft: '30px',
        borderRadius: '20px',
    };
    let dishModalImageEnd = {
        opacity: 1,
        height: '100%',
        width: '100%',
        marginTop: 0 + 'px',
        marginLeft: '0px',
        borderRadius: '0px'
    };

    if (action === 'open') {
        openDishModal();
    }
    if (action === 'close') {
        closeDishModal();
    }

    function openDishModal() {
        dishModal.style.display = 'block';

        dishModal.animate([
            modalStart,
            modalEnd
        ], timingOptions);

        dishModalImage.animate([
            dishModalImageStart,
            dishModalImageEnd
        ], timingOptions);
    }

    function closeDishModal() {

        dishModal.animate([
            modalEnd,
            modalStart,
        ], timingOptions);

        dishModalImage.animate([
            dishModalImageEnd,
            dishModalImageStart,
        ], timingOptions);

        setTimeout(() => {
            dishModal.style.display = 'none';
        }, 700);
    }
}
