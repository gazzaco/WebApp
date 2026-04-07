# 우주/무중력 테마 웹 갤러리

React와 Vite를 사용하여 구축한 우주/무중력 테마의 웹 사이트입니다.

## 기능 및 특징

* **우주 테마 (Space & Zero Gravity)**: 어두운 배경, 빛나는 텍스트, 애니메이션 효과 컴포넌트들을 사용하여 신비로운 무중력 공간의 느낌을 구현했습니다.
* **Component-Based**: 재사용성을 높이고 깔끔한 코드를 위해 여러 개의 독립된 컴포넌트로 구성했습니다. (Header, HeroSection, Navbar, GalleryCard, GalleryGrid, Footer)
* **모바일 반응형 디자인**: 다양한 해상도와 모바일 환경을 지원하는 CSS Grid 기반의 갤러리 레이아웃이 적용되어 있습니다.

## 기술 스택

* **Frontend**: React 19, Vite
* **Styling**: Vanilla CSS (Global Styles, CSS Keyframes Animations)
* **Deploy**: `gh-pages` 패키지를 통한 GitHub Pages 배포 설정 완료

## 라이브 데모 (배포된 사이트 URL)

[👉 우주 갤러리 확인하기](https://gazzaco.github.io/WebApp/)
*(참고: Vite 프로젝트의 `base: './'` 설정으로 빌드되어 있어, 상대 경로 기반의 어떤 서브 도메인에서도 정상 구동됩니다.)*

## 로컬 실행 방법

1. 의존성 패키지를 설치합니다:
   ```bash
   npm install
   ```
2. 개발 환경 서버를 실행합니다:
   ```bash
   npm run dev
   ```

## 배포 방법

준비된 스크립트를 통해 손쉽게 GitHub Pages에 빌드 및 배포를 진행할 수 있습니다. `package.json`에 `predeploy` 스크립트가 등록되어 있어 자동으로 앱을 빌드한 후 배포합니다.

```bash
npm run deploy
```
