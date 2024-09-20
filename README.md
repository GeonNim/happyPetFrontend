
# AICC 1차 프로젝트

### 프로젝트 설명
AICC 1차 프로젝트로 5팀의 의뢰를 받아 주변 동물병원을 찾고 진료예약을 할 수 있는 웹사이트를 만들기로 했습니다.  
프로젝트는 **React**와 **Tailwind CSS**를 사용하여 반응형 웹 애플리케이션을 개발했으며, **GitHub Actions**를 이용해 CICD 파이프라인을 구축하고 있으며, **AWS EC2**와 **Docker**를 통해 백엔드 서버를 배포합니다.

## 주요 기능

- [ ] **React**와 **Tailwind CSS** 기반의 반응형 웹 애플리케이션
- [ ] **Docker**를 사용한 컨테이너화
- [ ] **GitHub Actions**로 구성된 CICD 파이프라인
- [ ] **AWS EC2**를 사용한 백엔드 배포
- [ ] 다양한 페이지 구성 (예: Home, Map, About, Mypage 등)
- [ ] 반응형 네비게이션 바 및 햄버거 메뉴

## 주요 개발 항목

- **프로젝트 내에서 역할**: 사용자 인터페이스(UI) 중 네비게이션 바, 홈페이지, 병원 찾기 기능 및 커뮤니티 페이지 관련 개발 및 유지보수, 반응형 CSS 구현.
- **주요 업무**:
  - 네비게이션 바 및 사이트 구조 디자인
  - 병원 찾기 기능 구현
  - 커뮤니티 페이지 개발
  - 반응형 CSS 구현

## 기술 스택

- **프론트엔드**: React, Tailwind CSS
- **백엔드**: Node.js, Express
- **데이터베이스**: PostgreSQL
- **배포**: AWS EC2, Docker
- **CI/CD**: GitHub Actions

## 설치 및 실행 방법

### 사전 요구 사항

- [Node.js](https://nodejs.org/) 
- [Docker](https://www.docker.com/) 
- [Git](https://git-scm.com/) 

## 배포

배포는 AWS EC2 인스턴스를 사용하며, CICD 파이프라인을 통해 자동화되었습니다. GitHub Actions를 사용하여 새로운 변경 사항이 발생하면 자동으로 Docker 이미지가 빌드되고 EC2 서버에 배포됩니다.

### 배포 방법

1. GitHub 레포지토리에 코드를 푸시합니다.
2. GitHub Actions 워크플로우가 자동으로 실행됩니다.
3. AWS EC2에서 Docker 이미지가 자동으로 배포됩니다.
