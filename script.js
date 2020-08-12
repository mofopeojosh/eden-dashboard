// Global variables
var timingOptions = {
    easing: 'ease-in-out',
    duration: 700,
};

var modalStart = {
    backgroundColor: 'transparent',
};
var modalEnd = {
    backgroundColor: 'rgba(0,0,0,0.9)',
};

// Add Event listeners
var mealModalOpener = document.querySelector('#mealModalOpener');
mealModalOpener.onclick = function() { handleMealModal('open') };

var mealModalCloser = document.querySelector('#mealModalCloser');
mealModalCloser.onclick = function() { handleMealModal('close') };

var dishModalOpener = document.querySelector('#dishModalOpener');
dishModalOpener.onclick = function() { handleDishModal('open') };

var dishModal = document.querySelector('#dishModal');
dishModal.onclick = function(e) {
    if(e.target !== document.querySelector('#dishModal img')){
        handleDishModal('close');
    }
};

function handleMealModal(action) {
    var btn = document.querySelector('#mealModalOpener');
    var offsetTop = btn.offsetTop;
    var offsetHeight = btn.offsetHeight;
    var offsetWidth = btn.offsetWidth;
    var mealModal = document.querySelector('#mealModal');

    var mealModalContent = document.querySelector('#mealModalContent');
    var mealModalContentStart = {
        height: offsetHeight + 'px',
        width: offsetWidth + 'px',
        marginTop: offsetTop + 'px',
        opacity: 0,
    };
    var mealModalContentEnd = {
        height: '100%',
        width: '100%',
        marginTop: 130 + 'px',
        opacity: 1,
    };

    var mealItems = document.querySelectorAll('.meal-item');
    var mealItemsEnd = {
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
            var firstMealItemOffset = mealItems[0].offsetTop;
            var offsetTop = mealItem.offsetTop;
            var mealItemsStart = {
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
        var mealModal = document.querySelector('#mealModal');

        mealModal.animate([
            modalEnd,
            modalStart
        ], timingOptions);

        mealModalContent.animate([
            mealModalContentEnd,
            mealModalContentStart,
        ], timingOptions);

        var offsetDiff = 0;
        mealItems.forEach(function(mealItem) {
            var firstMealItemOffset = mealItems[0].offsetTop;

            var mealItemsStart = {
                marginTop: '-' + Math.abs((mealItem.offsetTop - firstMealItemOffset) - offsetDiff) + 'px',
                marginLeft: '-' + 20 + 'px',
            };
            offsetDiff = mealItem.offsetTop - firstMealItemOffset;

            mealItem.animate([
                mealItemsEnd,
                mealItemsStart
            ], timingOptions);
        });

        setTimeout(function() {
            mealModal.style.display = 'none';
        }, 700);
    }
}

function handleDishModal(action) {

    var dishButton = document.querySelector('#dishModalOpener');
    var offsetTop = dishButton.offsetTop;
    var offsetHeight = dishButton.offsetHeight;
    var offsetWidth = dishButton.offsetWidth;

    var dishModalContent = document.querySelector('#dishModalContent .dish-wrapper');
    var dishModalContentStart = {
        height: offsetHeight + 'px',
        width: offsetWidth + 'px',
        marginTop: offsetTop + 'px',
        marginLeft: '30px',
        opacity: 0.5,
    };
    var dishModalContentEnd = {
        height: '100%',
        width: '100%',
        marginTop: 0 + 'px',
        marginLeft: '0px',
        opacity: 1,
    };

    var dishModalImage = document.querySelector('#dishModalContent img');
    var dishModalImageStart = {
        borderRadius: '15px'
    };
    var dishModalImageEnd = {
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

        dishModalContent.animate([
            dishModalContentStart,
            dishModalContentEnd
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

        dishModalContent.animate([
            dishModalContentEnd,
            dishModalContentStart,
        ], timingOptions);

        setTimeout(function() {
            dishModal.style.display = 'none';
        }, 700);
    }
}
