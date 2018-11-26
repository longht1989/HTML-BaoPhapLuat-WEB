/* ====================================
   Onload functions
   ==================================== */
function randomImg() {
    var store = $("img[src*='unsplash']");
    for (i = 0; i < store.length; i++) {
        var imgsrc = $(store[i]).attr('src');
        $(store[i]).attr("src", imgsrc + i)
    }
}
$(function() {
    $('.story__thumb img[src$=".gif"]').parents('.story').addClass('story--gif');
    $('#partner-slider').bxSlider({
        nextText: '',
        prevText: '',
        adaptiveHeight: 1,
        auto: 1,
        pause: '5000',
        minSlides: 2,
        maxSlides: 2,
        slideWidth: 145,
        slideMargin: 10,
        moveSlides: 1
    });
    var myLazyLoad = new LazyLoad({
        elements_selector: ".story__thumb img"
    });
    // DO NOT run randomImg() function in live site;
    // randomImg();
});