import styled from "styled-components";
import vector1 from "./end.svg";
import vector2 from "./end.png";
import vector3 from "./VECTT2.png";
function Home() {
  return (
    <StyledHome>
      {/* <img
        src={vector2}
        alt="triangle with equal sides"
        srcset={vector1}
        className="imagefinal"
      /> */}
      <div className="test">
        <div className="row">
          <div className="column left">
            <div className="lefti">
              <form>
                <label>
                  <p className="fieldname">Name</p>

                  <input type="text" name="name" className="inputt" />
                </label>
                <br /> <br />
                <label>
                  <p className="fieldname">Email</p>

                  <input type="text" name="name" className="inputt" />
                </label>
                <br /> <br />
                <label>
                  <p className="fieldname" style={{ zIndex: "10" }}>
                    Branch
                  </p>

                  <input
                    type="text"
                    name="name"
                    className="inputt"
                    style={{ zIndex: "5" }}
                  />
                </label>
              </form>
            </div>
            <div className="righty">
              <form>
                <label>
                  <p className="fieldname">Team ID</p>

                  <input type="text" name="name" className="inputt" />
                </label>
                <br /> <br />
                <label>
                  <p className="fieldname">Contact Number</p>

                  <input type="text" name="name" className="inputt" />
                </label>
                <br /> <br />
                <label>
                  <p className="fieldname">Year</p>

                  <input type="text" name="name" className="inputt" />
                </label>
              </form>
            </div>
            <div className="jointeambutton">
              <button className="jointeam">JOIN TEAM</button>
            </div>
          </div>
          <div className="column right">
            <p className="text1">
              We
              <br />
              have
              <br />
              been
              <br />
              waiting
              <br />
              for you
            </p>
          </div>
        </div>
      </div>
    </StyledHome>
  );
}

const StyledHome = styled.div`
  width: 100%;
  height: 90vh;
  overflow: hidden;

  .column {
    float: left;
    padding: 0px;
    height: 90vh;
  }

  .left {
    width: 70%;
    float: left;
    padding-top: 50px;
  }

  .right {
    width: 30%;
  }

  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  .text1 {
    font-size: 3rem;
    padding-right: 4rem;
    padding-top: 120px;
    text-align: right;
    line-height: 1.2;
    color: white;
  }
  .lefti {
    width: 50%;
    padding-left: 4rem;
    float: left;
    padding-top: 70px;
  }
  .righty {
    width: 50%;
    float: right;
    padding-top: 70px;
  }
  .fieldname {
    font-size: 1.5rem;
    z-index: 16;
    color: white;
  }
  .inputt {
    height: 40px;
    width: 70%;
    border-radius: 5px;
    border: 0px;
    background-color: #aed6dc;
    z-index: 12;
  }

  .text1 {
    z-index: 10;
  }
  .row {
    position: relative;
    background-image: url(${vector3});
    height: 90vh;
    background-size: cover;

    background-position: 50% 32%;
  }
  .jointeambutton {
    align-items: center;
    padding-top: 24rem;
    align-self: center;
    align-content: center;
    padding-right: 120px;
  }
  .jointeam {
    padding: 10px;
    font-size: 1.2rem;
    text-align: center;
    align-items: center;
    margin: auto;
    display: flex;
    display: grid;
    border-radius: 10px;
    background-color: #303447;
    color: white;
    border: none;
    outline: none;
  }

  .jointeambutton :hover {
    background: transparent;
    outline: 2px solid #fff;
    color: #fff;
  }
  .imagefinal {
    position: absolute;
  }
  /* .vectorclass {
    position: absolute;
    height: 200%;
    width: 150%;
    padding-top: 100px;
    overflow: hidden;
    box-sizing: border-box;
    z-index: 1;
  } */
  /* .row {
    background-image: url(vector3);
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    height: auto;
    width: auto;
    z-index: 20;
  } */
  /* .row {
    background: url(vector2) no-repeat center;
    background-image: url(vector1);
    background-size: cover;
    position: 100px 100px;
  } */
`;

export default Home;
