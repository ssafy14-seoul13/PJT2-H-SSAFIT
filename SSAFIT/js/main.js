document.addEventListener('DOMContentLoaded', () => {
    const videoListContainer = document.querySelector('.video-list-container');
    const exerciseVideosContainer = document.querySelector('.exercise-videos-container');
    const partButtons = document.querySelectorAll('.part-btn');

    // 하드코딩된 영상 데이터
    const videos = [
        {
            "id": "gMaB-fG4u4g",
            "title": "전신 다이어트 최고의 운동 [칼소폭 찐 핵핵매운맛]",
            "part": "전신",
            "channelName": "ThankyouBUBU",
            "url": "https://www.youtube.com/embed/gMaB-fG4u4g"
        },
        {
            "id": "swRNeYw1JkY",
            "title": "하루 15분! 전신 칼로리 불태우는 다이어트 운동",
            "part": "전신",
            "channelName": "ThankyouBUBU",
            "url": "https://www.youtube.com/embed/swRNeYw1JkY"
        },
        {
            "id": "54tTYO-vU2E",
            "title": "상체 다이어트 최고의 운동 BEST [팔뚝살/겨드랑이살/등살/가슴어깨라인]",
            "part": "상체",
            "channelName": "ThankyouBUBU",
            "url": "https://www.youtube.com/embed/54tTYO-vU2E"
        },
        {
            "id": "QqqZH3j_vH0",
            "title": "상체비만 다이어트 최고의 운동 [상체 핵매운맛]",
            "part": "상체",
            "channelName": "ThankyouBUBU",
            "url": "https://www.youtube.com/embed/QqqZH3j_vH0"
        },
        {
            "id": "tzN6ypk6Sps",
            "title": "하체운동이 중요한 이유? 이것만 보고 따라하자 ! [하체운동 교과서]",
            "part": "하체",
            "channelName": "김강민",
            "url": "https://www.youtube.com/embed/tzN6ypk6Sps"
        },
        {
            "id": "u5OgcZdNbMo",
            "title": "저는 하체 식주의자 입니다",
            "part": "하체",
            "channelName": "GYM종국",
            "url": "https://www.youtube.com/embed/u5OgcZdNbMo"
        },
        {
            "id": "PjGcOP-TQPE",
            "title": "11자복근 복부 최고의 운동 [복근 핵매운맛]",
            "part": "복부",
            "channelName": "ThankyouBUBU",
            "url": "https://www.youtube.com/embed/PjGcOP-TQPE"
        },
        {
            "id": "7TLk7pscICk",
            "title": "(Sub)누워서하는 5분 복부운동!! 효과보장! (매일 2주만 해보세요!)",
            "part": "복부",
            "channelName": "SomiFit",
            "url": "https://www.youtube.com/embed/7TLk7pscICk"
        }
    ];

    // 영상 썸네일을 HTML에 렌더링하는 공통 함수
    function renderVideos(container, videoList) {
        container.innerHTML = '';
        videoList.forEach(video => {
            const videoThumbnail = document.createElement('div');
            videoThumbnail.classList.add('video-thumbnail');
            const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
            videoThumbnail.innerHTML = `
                <img src="${thumbnailUrl}" alt="${video.title} 썸네일">
                <div class="video-info">
                    <h4>${video.title}</h4>
                    <p>${video.channelName}</p>
                </div>
            `;
            container.appendChild(videoThumbnail);
        });
    }

    // 추천 영상 리스트를 동적으로 생성
    function renderRecommendedVideos(allVideos) {
        const recommendedVideos = allVideos.slice(0, 4);
        renderVideos(videoListContainer, recommendedVideos);
    }

    // 선택한 운동 부위에 대한 영상 리스트를 동적으로 생성
    function renderExerciseVideos(allVideos, part) {
        const targetPart = (part === '코어') ? '복부' : part;
        const filteredVideos = allVideos.filter(video => video.part === targetPart);
        renderVideos(exerciseVideosContainer, filteredVideos);
    }

    // 운동 부위 버튼에 이벤트 리스너를 추가
    function attachButtonListeners(videos) {
        partButtons.forEach(button => {
            button.addEventListener('click', () => {
                partButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const selectedPart = button.dataset.part;
                renderExerciseVideos(videos, selectedPart);
            });
        });
    }

    // 초기 화면 로드 시 실행
    renderRecommendedVideos(videos); // 추천 영상 렌더링
    attachButtonListeners(videos); // 버튼 이벤트 리스너 부착

    // 페이지 로드 시 '전신' 버튼이 선택된 상태로 시작
    const initialPart = document.querySelector('.part-btn.active').dataset.part;
    renderExerciseVideos(videos, initialPart);
});