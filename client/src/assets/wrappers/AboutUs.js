import styled from 'styled-components';
import WhoWeAre from '../images/WhoWeAre.jpg';

const Wrapper = styled.div`
  .aboutUsContainer {
    background-color: var(--grey-300);
    margin-top: var(--nav-height);
    font-size: large;
    line-height: 1.5;
    overflow: hidden;
  }

  .aboutUsHeroSection {
    width: 100%;
    min-height: calc(80vh - var(--nav-height));
    background-image: url(${WhoWeAre});
    display: grid;
    align-items: center;

    /* background: linear-gradient(
      to right,
      var(--primary-100),
      var(--primary-1000)
    ); */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 0em 1.5em;
  }

  /* .wrapItem {
    background-color: var(--grey-50);
  } */

  .whatIsLeverPapers {
    text-align: left;
    width: 900px;
    margin: -60px 0em 1em 5em;
    color: var(--black);
  }

  .whoWeAre {
    padding: 2em;
    box-shadow: var(--shadow-5);
    background-color: var(--primary-1000);
  }

  .title {
    margin: 0.25em 0em 0.5em 0em;
  }

  p {
  }

  h5 {
    margin: 0.5em 0em 0.5em 0em;
  }

  .nameBlock {
    padding: 1.5em;
    position: absolute;
    top: 537px;
    right: 150px;
    width: 325px;
    box-sizing: border-box;
    background-color: var(--primary-1000);

    box-shadow: var(--shadow-5);
  }

  /***Culture Section***/
  .culture {
    margin: 2em 0em 0em 0em;
  }

  .top {
    background-color: var(--primary-1000);
    text-align: center;
    padding: 1em 15em 15em 15em;
  }

  .values {
    display: block;
    margin-top: -15em;
  }

  .values ul {
    display: block;
    margin: 0 -15px;
    padding: 0 15px;
    list-style-type: none;
    white-space: nowrap;
  }

  .values ul li {
    display: inline-block;
    width: 25%;
    padding: 0 15px 15px 15px;
    box-sizing: border-box;
    margin-left: -4px;
    position: relative;
  }

  .values ul li img {
    width: 100%;
    overflow: hidden;
  }

  .values ul li .val {
    font-weight: bold;
    margin: 1em 0em 1em 0em;
    text-align: center;
  }

  .values ul li .val-img-desc {
    position: relative;
    display: block;
    box-shadow: var(--shadow-4);
    transition: all 320ms;
  }

  .values ul li:hover .val-img-desc {
    position: relative;
    display: block;
    box-shadow: 0 7px 11px #666;
  }

  .values ul li .desc {
    position: absolute;
    text-align: center;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    margin: 0;
    overflow: hidden;
    padding: 0 30px;
    color: white;
    white-space: normal;
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 17px;
    box-sizing: border-box;
    vertical-align: middle;
    transition: all 420ms;
  }

  .values ul li:hover .desc {
    height: 100%;
    padding: 30px;
    transition: all 420ms;
  }

  .midText {
    /* background-color: var(--primary-1000); */
    text-align: center;
    padding: 3em 15em 3em 15em;
  }

  .midText p {
    line-height: 1.5;
  }

  /*About us culture***********************************************************/
  /* 
   */

  /* Why choose Us */
  /* .causes {
    max-width: 700px;
    margin-left: 350px;
    margin-bottom: 10px;
    margin-top: 25px;
    position: relative;
    color: #555;
    padding: 13px 0 13px 65px;
    text-transform: none;
    width: 100%;
    display: block;
    z-index: 3;
  }
  .causes h2 {
    text-align: center;
  }
  .causes .list-aid .pre-list {
    color: gray;
    text-transform: uppercase;
    margin: 0 0 10px 0;
  }
  .causes .list-aid ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  .causes .list-aid ul li {
    padding: 0;
    width: 50%;
    display: block;
    float: left;
    box-sizing: border-box;
  }
  .causes .list-aid ul li.f {
    padding-right: 15px;
  }
  .causes .list-aid ul li a {
    display: block;
    position: relative;
    padding: 15px 15px 45px 15px;
    box-sizing: border-box;
    border-radius: 3px;
    box-shadow: 0px 2px 7px -1px rgba(0, 0, 0, 0.4);
    -webkit-box-shadow: 0px 2px 7px -1px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 0px 2px 7px -1px rgba(0, 0, 0, 0.4);
    -o-box-shadow: 0px 2px 7px -1px rgba(0, 0, 0, 0.4);
    transition: all 320ms;
  }

  .causes .list-aid ul li a:hover {
    box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.8);
    -webkit-box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.8);
    -moz-box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.8);
    -o-box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.8);
  }

  .causes .list-aid ul li a span {
    display: block;
  }

  .causes .list-aid ul li a .acr {
    text-decoration: none;
    color: #555;
    font-size: 23px;
    margin: 35px 0 0 0;
  }

  .causes .list-aid ul li a .full {
    text-decoration: none;
    color: gray;
    font-size: 13px;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .causes .list-aid ul li a .amt {
    background-color: rgba(0, 128, 0, 0.8);
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    font-size: 12px;
    margin: 0;
    padding: 0 10px 0 15px;
    color: white;
    position: absolute;
    top: 15px;
    left: 0;
    font-weight: bold;
    text-transform: uppercase;
  }

  .causes .list-aid ul li a .amt::after {
    content: 'Annual';
    display: block;
    color: gray;
    position: absolute;
    text-transform: uppercase;
    top: 0;
    left: 100%;
    padding-left: 7px;
  }

  .causes .list-aid ul li a .cta {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: whiteSmoke;
    font-size: 13px;
    padding: 4px 15px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    color: #222;
    font-weight: bold;
    box-sizing: border-box;
    border-top: 1px solid #e1e1e1;
    width: 100%;
  }

  .causes .list-aid ul li a .cta::after {
    content: '\f08e';
    font-weight: 400;
    font-family: 'Font Awesome 5 Pro';
    padding-left: 7px;
  }
  .cause h4 {
    position: relative;
    color: #555;
    padding: 13px 0 13px 65px;
    text-transform: none;
    margin: 0 0 0 -35px;
  }
  .cause h4 .num {
    display: block;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    border: 3px solid green;
    background-color: green;
    color: white;
    font-size: 40px;
    line-height: 70px;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;
  }
  .cause h4 .t {
    padding: 10px 0 10px 25px;
    border-top: 3px solid green;
    border-bottom: 3px solid green;
    width: 100%;
    display: block;
    z-index: 3;
  } */
`;
export default Wrapper;
