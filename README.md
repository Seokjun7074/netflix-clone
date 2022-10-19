# 넷플릭스 클론코딩 해보기

---

### 1. 구현할 기능 (생각나는대로 추려보기)

- 메인화면 (헤더, 메인화면 영화리스트)
- 영화 클릭 시 모달창

---

### 2. 페이지 설계 (페이지별 목적)

- 일단 싱글페이지롷 해보자

---

### 3. 공통 컴포넌트 제작

- 모달창
- 영화 리스트 목록
- 슬라이드 컨테이너

---

# 만들면서 삽질한 내용

### 1. 영화의 수, 이미지의 너비를 가지고 슬라이드 이미지의 총 길이를 구하는데서 막힘

=>useState의 비동기성 때문인 것 같음

```
const IMAGE_WIDTH = 200;
const [movie, setMovie] = useState([]);
const [movieNumber, setMovieNumber] = useState(10);
const getMovies = async () => {
    const response = await fetch(
        //영화 오픈 api
    );
    const jsonResponse = await response.json();
    setMovie(jsonResponse.data.movies);
    setLoading(false);
  };
useEffect(() => {
    setMovieNumber(Object.keys(movie).length);
  }, [movie]);

const [style, setStyle] = useState({
    width: `4000px`,
    transform: `translateX(${curMargin}px)`,
    transition: `all 0.2s ease-in-out`,
  });


```

슬라이드 부분을 컴포넌트로 분리시키고 props를 통해 해결!! + 제발 props 받을 때 중괄호 좀 까먹지말자....

---

### 1. 영화의 수, 이미지의 너비를 가지고 슬라이드 이미지의 총 길이를 구하는데서 막힘

캐러셀 슬라이드 부분의 반응형 처리가 어려움.
현재 캐러셀 슬라이드의 구조는 너비를 임의로 설정하고 (ex:1800px) 보여줄 개수만큼 나누어서 이미지의 크기를 설정하는 방식.
width: 100%이용해서 처리를 하면 좋을것같으나 useRef를 통해 뷰포인트 너비에따른 width값을 가져오는것에 실패.. 추훟에 styled-component를 사용하여 해결해보장ㅠㅠㅠㅠㅠㅠㅠ


<22.10 추가>
https://github.com/yo-seobara/client/blob/master/src/components/global/slider/index.js
이거만들면서 다시 해결홰봤당
