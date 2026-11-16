/*
  ───────────────────────────────────────────────
  사이트 내용 수정은 이 파일만 고치면 됩니다.
  - 따옴표(" ") 안의 글자만 바꾸세요.
  - 유튜브 영상 ID = 링크에서 youtu.be/ 뒤 11자리
    예) https://youtu.be/oZg0MyHn-_U  →  "oZg0MyHn-_U"
  ───────────────────────────────────────────────
*/
window.SITE = {
  email: "asdf45689@naver.com",

  // 작업 (순서대로 표시). 첫 번째 작품이 첫 화면 플레이어와 대표 케이스에 나옵니다.
  works: [
    {
      title: "PLAY TO DREAM",
      youtube: "oZg0MyHn-_U",
      desc: "LG 공모전 출품 AI 뮤직비디오. 180 BPM 리듬 편집.",
      chips: ["AI 뮤직비디오", "LG 공모전"],
      blueChip: 0
    },
    {
      title: "복싱",
      youtube: "R5ZKhWRwIGQ",
      desc: "리서치로 시작해 하이라이트로 재편집한 스포츠 영상.",
      chips: ["리서치", "하이라이트 편집"]
    },
    {
      title: "옆자리",
      youtube: "76Z0CyXg0iM",
      desc: "봉누도2 팬메이드 AI 뮤직비디오. 기획·스토리 구성.",
      chips: ["AI 뮤직비디오", "팬메이드"],
      blueChip: 0
    },
    {
      title: "BiiiG",
      youtube: "xbaH6bVX0GM",
      desc: "가사를 읽게 만드는 키네틱 타이포그래피.",
      chips: ["모션", "타이포"]
    }
  ],

  // 케이스 상세 — works 순서대로 탭으로 표시됩니다.
  cases: [
    {
      label: "CASE 01 · LG 공모전 출품",
      headline: "180 BPM 위에서<br>한 박도 놓치지 않는 AI 뮤직비디오",
      rows: [
        ["역할", "기획 · AI 영상 제작 · 편집 · 합성 · 색보정 (1인)"],
        ["제작", "Premiere Pro · After Effects · AI 영상"],
        ["출품", "LG 공모전"]
      ],
      behind: [["59", "편집 구간"], ["1,671", "줄 작업서"], ["3주", "제작 기간"]]
    },
    {
      label: "CASE 02 · 리서치형 과제",
      headline: "리서치로 시작해<br>하이라이트로 다시 짠 스포츠 영상",
      rows: [
        ["역할", "리서치 · 구성 · 편집 (1인)"],
        ["레퍼런스", "복싱 하이라이트 MIX 영상"],
        ["제작", "Premiere Pro · After Effects"]
      ],
      behind: [["2:39", "러닝타임"], ["2차", "재편집 완료"], ["입장→승리", "한 경기 서사"]]
    },
    {
      label: "CASE 03 · 봉누도2 팬메이드",
      headline: "가사부터 직접 쓴<br>팬메이드 AI 뮤직비디오",
      rows: [
        ["역할", "작사 · 기획 · AI 영상 제작 · 편집 (1인)"],
        ["원작", "봉누도2 갱단 블랙리스트 — 까치 × 예나 서사"],
        ["곡", "88 BPM · 24바 랩 · 인트로 없이 바로 보컬"]
      ],
      behind: [["88", "BPM"], ["24바", "가사 직접 작성"], ["5파트", "Verse·Hook 구조"]]
    },
    {
      label: "CASE 04 · 키네틱 타이포그래피",
      headline: "가사를 읽게 만드는<br>키네틱 타이포그래피",
      rows: [
        ["역할", "기획 · 타이포 디자인 · 모션 (1인)"],
        ["기획", "TXT 작업서 기반 구간 설계"],
        ["색감", "노겜노라 톤 — 마젠타 · 시안 · 골드 + 남보라"]
      ],
      behind: [["4색", "컬러 팔레트"], ["TXT", "작업서 기반"], ["20주년", "BIGBANG 팬메이드"]]
    }
  ],

  // 이력 (위에서부터 표시)
  career: [
    ["2024.12 – 2025.02", "더오름컴퍼니", "인플루언서 공동구매", "브랜드·인플루언서 일정 조율, 회사 AI 쇼츠 채널 1인 운영"],
    ["2025.05 – 2026.02", "㈜유니토스", "재고관리", "전산·실재고 점검 체계 정리"],
    ["2026.05 – 2026.12", "그린AI캠퍼스평생교육원", "AI 기반 실무형 3D 영상크리에이터 과정", "수료 예정"]
  ],

  tools: ["Premiere Pro", "After Effects", "Cinema 4D", "Photoshop", "Illustrator"],
  aiTools: ["Midjourney", "Kling", "Higgsfield"],

  // 시작점 · 빽투더케이스
  startChannel: "https://www.youtube.com/channel/UCCNezCurhYM7E8IBLOJBI5A/shorts"
};
