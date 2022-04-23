# 넷플릭스 클론코딩 해보기

---

### 1. 구현할 기능 (생각나는대로 추려보기)

- 메인화면 (헤더, 메인화면 영화리스트)
- 영화 클릭 시 모달창

---

### 2. 페이지 설계 (페이지별 목적)

- 일단 싱글페이지롷 해보자

---

### 3. 공통 컴포넌트 제작(동일한 디자인으로..??)

- 모달창
- 영화 리스트 목록
- 슬라이드 컨테이너

---

---

# 만들면서 삽질한 내용

영화의 수, 이미지의 너비를 가지고 슬라이드 이미지의 총 길이를 구하는데서 막힘
=> useState의 비동기성 때문인 것 같음

```
const IMAGE_WIDTH = 200;
const [movie, setMovie] = useState([]);
const [movieNumber, setMovieNumber] = useState(10);
const getMovies = async () => {
    const response = await fetch(
        //패치
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
