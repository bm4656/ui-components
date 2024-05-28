# UI Components 모음집

> 인프런 FE재남님의 UI 요소 직접 만들기 강의를 들으며 작성하는 레포지토리입니다.

## 디렉토리 구조

- `app`: app 전반에 대한 기본 view 제공
  - `[...item]/page.tsx`: `/[...item]` route의 page view. `routes`의 `key`에 매칭된 컴포넌트를 렌더링.
  - `layout.tsx`: 기본적인 html 구성
  - `page.tsx`: `/` route의 page view. `/README.md`를 보여줍니다.
  - `global.scss`: app 전반의 style
  - `gnb.tsx`: 좌측 메뉴 컴포넌트
- `components`
  - `vanillaWrapper.ts`: 독립적인 VanillaJS 환경의 wrapper 컴포넌트
- `routes.ts`: route 구성

## Getting Started

- npm module 설치

```bash
npm install
# or
pnpm install
# or
yarn
```

- 개발 서버를 실행

```bash
npm run dev
```

- 브라우저에서 [http://localhost:3000](http://localhost:3000)에 접속하여 결과를 확인합니다.
