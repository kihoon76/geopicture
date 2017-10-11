$(function() {
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = { 
        center: new daum.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

    var map = new daum.maps.Map(mapContainer, mapOption); 
});