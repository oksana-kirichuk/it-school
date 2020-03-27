var accordion = (function () {
    return function (selector) {
		var _mainElem = document.querySelector(selector),
			_items = _mainElem.querySelectorAll('.accordion__item');

		for(var i = 0; i < _items.length; i++) {
			_items[i].addEventListener('click', function () {

				if (_mainElem.querySelector('.accordion__item--open') && _mainElem.querySelector('.accordion__item--open') != this) {
					_mainElem.querySelector('.accordion__item--open .accordion__content').style.maxHeight = null;
					_mainElem.querySelector('.accordion__item--open').classList.remove('accordion__item--open');
				}	

				var itemContent = this.querySelector('.accordion__content');				
				
				if (itemContent.style.maxHeight) {
					itemContent.style.maxHeight = null;
				} else {
					itemContent.style.maxHeight = itemContent.scrollHeight + "px";
				}

				this.classList.toggle('accordion__item--open');
			});
		}
    }
}());


function ready() {
    if (document.querySelector('.accordion') != null) {
        var accordionTest = accordion('.accordion');
    }
    
}

document.addEventListener("DOMContentLoaded", ready);



      

      
  
  

