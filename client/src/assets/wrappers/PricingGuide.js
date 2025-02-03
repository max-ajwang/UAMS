import styled from 'styled-components';

const Wrapper = styled.div`
  .pricingContainer {
    background-color: var(--grey-300);
    margin-top: var(--nav-height);
    font-size: large;
    line-height: 1.5;
  }

  /* Pricing */
  .wrapItem {
    width: 100%;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    padding: 50px 0;
    border-bottom: 1px solid #e7e7e7;
    font-size: 18px;
    background-color: #f8f8f8;
    max-width: 1180px;
    text-align: center;
    padding: 0 15px;
    margin: 0 auto;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
  }
  .wrapItem.gray {
    background-color: #f8f8f8;
  }
  .priceTables {
    padding-bottom: 0;
    overflow: hidden;
    padding: 0 15px;
  }
  .clearAfter::after {
    content: ' ';
    height: 0;
    width: 100%;
    clear: both;
  }
  section.top .pre .utilityBar .headlineContain:hover > #uhMod.inner::before,
  section.top .pre .utilityBar .headlineContain:hover > #uhMod.inner::after {
    display: none;
  }
  #uhMod.inner {
    padding: 10px 105px 8px 10px;
    box-sizing: border-box;
    display: block;
    position: relative;
  }
  @-moz-document url-prefix() {
    #uhMod.inner {
      padding-top: 9px !important;
    }
  }
  #uhMod.inner::after {
    content: '';
    width: 1px;
    height: 15px;
    display: block;
    background-color: #ccc;
    position: absolute;
    top: 10px;
    right: 0;
  }
  #uhMod.inner p.hlIntro {
    margin: 0;
    font-size: 13px;
    line-height: 1.3em;
    color: #555;
    display: inline-block;
    max-height: 1.3em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    transition: all 320ms;
  }
  section.top .pre .utilityBar .headlineContain:hover > #uhMod.inner p.hlIntro {
    max-height: 3.9em;
    white-space: normal;
  }
  #uhMod.inner p.hlIntro span.hlTitle {
    display: inline-block;
    font-weight: bold;
  }

  #uhMod.inner p.hlIntro .hlIcon {
    width: 16px;
    height: 16px;
    display: inline-block;
  }

  #uhMod.inner p.hlIntro .hlIcon::before {
    content: '\f0f3';
    display: block;
    font-weight: 400;
    font-family: 'Font Awesome 5 Pro';
    font-size: 16px;
    position: absolute;
    top: 9px;
    left: 10px;
  }

  #uhMod.inner p.hlIntro .hlIcon.title_icon_stopwatch::before {
    content: '\f2f2';
    font-weight: 400;
  }

  #uhMod.inner a.hlCta {
    font-size: 11px;
    display: inline-block;
    background-color: #666;
    color: white;
    padding: 1px 13px 0 5px;
    line-height: 17px;
    border-radius: 3px;
    position: absolute;
    top: 9px;
    right: 10px;
    text-transform: uppercase;
    transition: all 320ms;
  }

  @-moz-document url-prefix() {
    section.top .pre .utilityBar .headlineContain #uhMod.inner a.hlCta {
      padding: 1px 13px 0px 5px;
    }
  }

  #uhMod.inner a.hlCta::after {
    content: '\f054';
    font-weight: 400;
    font-family: 'Font Awesome 5 Pro';
    font-size: 8px;
    position: absolute;
    top: 0;
    right: 5px;
    line-height: 18px;
  }

  #uhMod.inner a.hlCta:hover {
    box-shadow: 0 3px 7px #6b6b6b;
    -webkit-box-shadow: 0 3px 7px #6b6b6b;
    -moz-box-shadow: 0 3px 7px #6b6b6b;
    background-color: #444;
  }
  .pBody.pricePage .wrapItem .inner {
    max-width: 1180px;
    text-align: center;
    padding: 0 15px;
    margin: 0 auto;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
  }
  .pBody.pricePage .wrapItem .inner h2 {
    font-size: 40px;
    margin: 0 0 25px;
    font-weight: normal;
    text-shadow: none;
  }

  .pBody.pricePage .wrapItem .inner .subHeadTwo {
    font-size: 20px;
    width: 850px;
    margin: 0 auto;
  }

  .pBody.pricePage .wrapItem .inner p {
    font-size: 18px;
  }
  .pBody.pricePage .priceExampleWrap .innerInvoice .head .invTitle {
    display: block;
    width: 100%;
    font-size: 50px;
    font-weight: bold;
    text-transform: uppercase;
    color: rgba(161, 161, 161, 0.4);
  }
  .subHeadTwo {
    width: 100%;
  }
  .priceTablesWrap {
    margin-top: 40px;
  }
  .priceTablesWrap ul.tabsList {
    display: table;
    margin: 0 auto;
    padding: 0;
    list-style-type: none;
  }
  .priceTablesWrap ul.tabsList li {
    display: block;
    float: left;
    position: relative;
  }
  .priceTablesWrap ul.tabsList li:hover {
    cursor: pointer;
  }
  .priceTablesWrap ul.tabsList li span {
    display: block;
    padding: 15px 25px;
    border-top: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
    margin-top: 9px;
  }
  .priceTablesWrap ul.tabsList li.tab-link.one span {
    border-top-left-radius: 2px;
    margin-right: -1px;
  }
  .priceTablesWrap ul.tabsList li.tab-link.two span {
    margin-right: -1px;
  }
  .priceTablesWrap ul.tabsList li.tab-link.three span {
    border-top-right-radius: 2px;
  }
  .priceTablesWrap ul.tabsList li.current span {
    background-color: white;
    position: relative;
    padding: 20px 27px;
    margin-top: 0;
    z-index: 9;
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
  }
  .priceTablesWrap ul.tabsList li.one.current + li span {
    border-left: 0;
    border-right: 0;
  }
  .inclusionsWrap {
    line-height: 25px;
  }

  /*******/

  .priceTablesWrap .tabContent {
    display: none;
    width: 100%;
    position: relative;
    background-color: white;
    -webkit-box-shadow: 0 1px 20px #bcbbbb;
    -moz-box-shadow: 0 1px 20px #bcbbbb;
    box-shadow: 0 1px 20px #bcbbbb;
    border: 1px solid #ccc;
    border-radius: 2px;
  }
  .priceTablesWrap .tabContent:hover {
    cursor: default;
  }
  .priceTablesWrap .tabContent.current {
    display: block;
    margin-top: -1px;
  }
  .priceTablesWrap .tabContent .tabInner {
    padding: 15px 0 0;
  }
  .priceTablesWrap .tabContent .tabInner .tbTitle {
    margin: 10px 0 25px;
    padding: 0 15px;
    box-sizing: border-box;
  }
  .priceTablesWrap table.pTable {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    overflow: hidden;
    position: relative;
    z-index: 0;
  }
  .priceTablesWrap table.pTable tr th,
  .priceTablesWrap table.pTable tr td {
    padding: 5px 10px;
    vertical-align: middle;
    position: relative;
    height: 30px;
    border-bottom: 1px solid #e7e7e7;
    border-right: 1px solid #e7e7e7;
  }
  .priceTablesWrap table.pTable tr td {
    width: 21%;
    transition: all 220ms;
  }
  .priceTablesWrap table.pTable tr th.deadlineItem {
    width: 16%;
    font-weight: normal;
    border-right: 1px solid #e7e7e7;
    background-color: #e1e1e1;
  }
  .priceTablesWrap table.pTable tr th.deadlineItem.even,
  .priceTablesWrap table.pTable tr:hover th.deadlineItem {
    background-color: #ff9800;
  }
  .priceTablesWrap table.pTable tr th.deadlineItem.first,
  .priceTablesWrap table.pTable tr th.wLevelEmpty {
    background-color: green;
    color: white;
    font-weight: bold;
  }
  .priceTablesWrap table.pTable tr th.deadlineItem.first span {
    position: absolute;
    width: 100%;
    text-align: center;
    left: 0;
    top: -13px;
  }

  .priceTablesWrap table.pTable tr th.wLevelEmpty {
    border-bottom: 0;
    border-top: 1px solid #ccc;
  }

  .priceTablesWrap table.pTable tr th.wLevel {
    font-weight: normal;
    background-color: #f8f8f8;
    font-weight: bold;
    font-style: italic;
    border-top: 1px solid #ccc;
  }

  .priceTablesWrap table.pTable tr th.lvlItem {
    background-color: #d1d1d1;
    color: #555;
    font-weight: bold;
  }

  .priceTablesWrap table.pTable tr td:hover {
    background-color: #d1d1d1;
    cursor: default;
    font-weight: bold;
  }

  .priceTablesWrap table.pTable tr:hover {
    background-color: rgba(237, 237, 237, 0.4);
  }

  .priceTablesWrap table.pTable td,
  .priceTablesWrap table.pTable th {
    position: relative;
  }

  .priceTablesWrap table.pTable td:hover::after,
  .priceTablesWrap table.pTable th:hover::after {
    content: '';
    position: absolute;
    background-color: rgba(237, 237, 237, 0.4);
    left: 0;
    top: -5000px;
    height: 10000px;
    width: 100%;
    z-index: -1;
  }
  /*Below Pricing Table*/
  .freeIncl {
    text-align: center;
    margin-top: 40px;
  }
  .freeIncl ul {
    list-style: none;
  }
  .legalNotes {
    padding: 10px;
    box-shadow: 0 0 5px;
  }
`;
export default Wrapper;
