# React Todo List


## Demo

[https://aerichoi.github.io/react-todo/](http://aerichoi.github.io/react-todo/)

## Version

- node.js: 12.18.4 [다운로드](https://nodejs.org/en/blog/release/v12.18.4/)
- npm: 6.14.6
```
npm i npm@6.14.6
```
- create-react-app: 4.0.1
- 이하 package.json 파일 확인.


## Running Process

### `install`
```
cd react-todo
npm install
```

### `start`

```
npm start
```

### `build`

배포 시에만 필요.(생략 가능)

```
npm run build
```

### 기능 요구사항

- 새로운 TODO(제목과 내용)를 작성할 수 있다.
- TODO 목록을 볼 수 있다.
- TODO 항목의 제목과 내용을 수정할 수 있다.
- TODO 항목을 삭제할 수 있다.
- 사용자의 선택에 의해 TODO에는 마감 기한을 넣을 수 있다.
- TODO 항목의 우선순위를 설정 및 조절 할 수있다.
- TODO 항목에 대한 완료처리를 할 수 있다.
- 마감기한이 지난 TODO에 대해 알림을 노출할 수 있다.
    - 성능 요구사항:
        - TODO 이용 시 발생하는 오류 사항을 최소화한다.
        - 오류 발생 시 사용자가 이해하기 쉽게 표시한다.
        - 다른 사람이 읽기 쉬운 코드를 작성한다.


### 인터페이스 요구사항:

- 직관적이고 의미 전달이 명확한 화면을 사용자에게 제공한다.