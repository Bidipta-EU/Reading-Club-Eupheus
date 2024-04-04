import MainHeader from "../components/MainHeader";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full relative bg-gray-100 flex flex-col items-start justify-start  tracking-[normal] mq750:gap-[25px_50.2px]">
      <div className="self-stretch h-[7400.3px] relative bg-gray-100 hidden" />
      <MainHeader />
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div>
              <div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                <img
                  src="/about-us.png"
                  loading="lazy"
                  alt=""
                  class="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div class="md:pt-8 lg:flex lg:flex-col lg:justify-center">
              {/* <p class="text-center font-bold text-purple-600 md:text-left">
              Why reading
              </p> */}

              <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                Why reading is important ?
              </h1>

              <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                Reading plays a significant role in a child's education by
                prepping them after school life. It is key for acquiring good
                study habits and builds the foundation for communication &
                connection. Studies suggest that students who have read more
                books and read on a regular basis have better school results.
              </p>
              {/* <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                Apart from language and understanding, reading habit nurtures a
                kid's creativity, improves focus, adaptability to new things,
                and develops problem-solving skills for life.{" "}
              </p> */}
            </div>
          </div>
        </div>
      </div>

      {/* <section className="self-stretch flex flex-col items-start justify-start pt-0 pb-[166.8px] pr-[19px] pl-0 box-border gap-[58px] max-w-full text-center text-23xl text-gray-800 font-mulish mq750:gap-[29px_58px] mq750:pb-[108px] mq750:box-border">
        <div className="w-[1184.6px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[443.2px] flex flex-col items-start justify-start gap-[22px] max-w-full">
            <div className="self-stretch relative leading-[50px] font-semibold z-[1] mq1050:text-15xl mq1050:leading-[40px] mq450:text-6xl mq450:leading-[30px]">
              ABOUT US
            </div>
            <div className="w-[402.6px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <div className="h-[9px] w-10 relative box-border z-[1] border-t-[2px] border-solid border-darkslategray" />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center gap-[19.5px] max-w-full text-left mq1050:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border min-w-[482px] max-w-full mq750:min-w-full">
            <img
              className="self-stretch h-[287px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/aboutus-1@2x.png"
            />
          </div>
          <div className="w-[491px] flex flex-col items-start justify-start gap-[19px] min-w-[491px] max-w-full mq750:min-w-full mq1050:flex-1">
            <div className="self-stretch relative leading-[50px] font-semibold pr-3.5 z-[1] mq1050:text-15xl mq1050:leading-[40px] mq450:text-6xl mq450:leading-[30px]">
              Why reading is important ?
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full text-base text-darkslateblue">
              <div className="h-[231px] flex-1 relative leading-[24px] flex items-center max-w-full z-[1]">
                <span>
                  <p className="m-0">{`Reading plays a significant role in a child's education by prepping them after school life. It is key for acquiring good study habits and builds the foundation for communication & connection. Studies suggest that students who have read more books and read on a regular basis have better school results.`}</p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">
                    Apart from language and understanding, reading habit
                    nurtures a kid's creativity, improves focus, adaptability to
                    new things, and develops problem-solving skills for life.
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="self-stretch flex flex-row items-start justify-end pt-0 px-[58px] pb-[111.3px] box-border max-w-full text-left text-23xl text-gray-800 font-mulish lg:pl-[29px] lg:pr-[29px] lg:box-border mq750:pb-[72px] mq750:box-border">
        <div className="flex flex-col items-start justify-start gap-[60px] max-w-full lg:gap-[30px_60px]">
          <div className="flex flex-col items-start justify-start gap-[69px] max-w-full lg:gap-[34px_69px] mq750:gap-[17px_69px]">
            <div className="w-[1092px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <div className="w-[870px] relative leading-[52px] font-semibold flex items-center shrink-0 max-w-full z-[1] mq1050:text-15xl mq1050:leading-[40px] mq450:text-6xl mq450:leading-[30px]">
                Why choosing Fiction Express Reading Live
              </div>
            </div>
            <div className="flex flex-row items-start justify-center gap-[75px] max-w-full text-center text-xl text-darkslateblue lg:flex-wrap lg:gap-[75px_37px] mq750:gap-[75px_19px]">
              <div className="w-[346px] flex flex-row items-start justify-center [row-gap:20px] max-w-full mq450:flex-wrap">
                <img
                  className="h-[81.5px] w-20 relative object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/icon1png2x-1@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border min-w-[173px]">
                  <div className="self-stretch relative leading-[26px] font-medium z-[2] mq450:text-base mq450:leading-[21px]">
                    <p className="m-0">GUIDED READING NOTES &</p>
                    <p className="m-0">GLOSSARY</p>
                  </div>
                </div>
              </div>
              <div className="h-[81.5px] w-[315px] flex flex-row items-end justify-start py-0 pr-[30px] pl-0 box-border">
                <img
                  className="h-[81.5px] w-20 relative object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/icon3png@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[14.5px]">
                  <div className="self-stretch relative leading-[26px] font-medium z-[2] mq450:text-base mq450:leading-[21px]">
                    <p className="m-0">COMPREHENSION</p>
                    <p className="m-0">QUESTIONS</p>
                  </div>
                </div>
              </div>
              <div className="h-[88px] w-[315px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                <div className="self-stretch flex-1 flex flex-row items-end justify-start">
                  <div className="self-stretch flex flex-col items-start justify-end pt-0 px-0 pb-[5.5px]">
                    <img
                      className="w-20 h-[81.5px] relative object-cover z-[1]"
                      loading="lazy"
                      alt=""
                      src="/icon2png@2x.png"
                    />
                  </div>
                  <div className="flex-1 relative leading-[26px] font-medium z-[2] mq450:text-base mq450:leading-[21px]">
                    <p className="m-0">VOCABULARY AND</p>
                    <p className="m-0">GRAMMAR BUILDER</p>
                    <p className="m-0">WORKSHEET</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1091px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-xl text-darkslateblue">
            <div className="w-[771px] flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
              <div className="w-[292px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
                <div className="self-stretch flex flex-row items-end justify-start [row-gap:20px] mq450:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[9.5px] box-border min-w-[138px]">
                    <div className="self-stretch relative leading-[26px] font-medium z-[1] mq450:text-base mq450:leading-[21px]">
                      <p className="m-0">OPEN DISCUSSION</p>
                      <p className="m-0">ACTIVITIES</p>
                    </div>
                  </div>
                  <img
                    className="h-[81.5px] w-20 relative object-cover z-[2]"
                    loading="lazy"
                    alt=""
                    src="/icon4png@2x.png"
                  />
                </div>
              </div>
              <div className="h-[81.5px] w-[341px] relative max-w-full">
                <img
                  className="absolute h-full top-[0px] bottom-[0px] left-[261px] max-h-full w-20 object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/icon5png@2x.png"
                />
                <div className="absolute top-[20px] left-[0px] leading-[26px] font-medium flex items-center w-[273px] h-[52px] z-[2] mq450:text-base mq450:leading-[21px]">
                  <span className="w-full">
                    <p className="m-0">ACCESS TO 100+ FICTION</p>
                    <p className="m-0">EXPRESS BOOKS</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[235.8px] pr-5 pl-[23px] box-border max-w-full text-left text-23xl text-gray-800 font-mulish mq750:pb-[153px] mq750:box-border">
        <div className="w-[1107px] flex flex-col items-start justify-start gap-[29px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="w-[513px] relative leading-[52px] font-semibold flex items-center shrink-0 max-w-full z-[1] mq1050:text-15xl mq1050:leading-[40px] mq450:text-6xl mq450:leading-[30px]">
              Our 6 Step Methodology
            </div>
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/6steppng2x-1@2x.png"
          />
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-[68px] pb-[208.8px] box-border max-w-full text-left text-23xl text-gray-800 font-mulish lg:pb-[136px] lg:box-border mq750:pl-[34px] mq750:pr-[34px] mq750:pb-[57px] mq750:box-border mq1050:pb-[88px] mq1050:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[84.1px] max-w-full shrink-0 lg:gap-[42px_84.1px] mq750:gap-[21px_84.1px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[43px] max-w-full mq750:gap-[21px_43px]">
            <div className="w-[1059px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <div className="w-[597px] flex flex-col items-start justify-start gap-[15px] max-w-full">
                <div className="self-stretch relative leading-[52px] font-semibold z-[1] mq1050:text-15xl mq1050:leading-[40px] mq450:text-6xl mq450:leading-[30px]">
                  ENROLL YOUR CHILD NOW !
                </div>
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[59px]">
                  <div className="h-[9px] w-10 relative box-border z-[1] border-t-[2px] border-solid border-darkslategray" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center gap-[111px] max-w-full lg:gap-[111px_55px] mq750:gap-[111px_28px] mq1050:flex-wrap">
              <img
                className="h-[434.9px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[364px] z-[1] mq750:min-w-full"
                loading="lazy"
                alt=""
                src="/figure--1e6b62c7536e46559d56ed7e5fa172b3-landinghomepageimg1png@3x.png"
              />
              <div className="w-[465px] flex flex-col items-start justify-start gap-[22px] min-w-[465px] max-w-full mq750:min-w-full mq1050:flex-1">
                <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full">
                    <div className="flex-1 relative leading-[50px] font-semibold inline-block max-w-full z-[1] mq1050:text-15xl mq1050:leading-[40px] mq450:text-6xl mq450:leading-[30px]">
                      LEVEL 1 | Grade 1-3
                    </div>
                  </div>
                  <div className="self-stretch h-[168px] relative text-base leading-[24px] text-darkslateblue flex items-center shrink-0 z-[2]">{`Reading plays a significant role in a child's education by prepping them after school life. It is key for acquiring good study habits and builds the foundation for communication & connection. Studies suggest that students who have read more books and read on a regular basis have better school results.`}</div>
                </div>
                <div className="w-[167.3px] flex flex-row items-start justify-start py-0 px-px box-border text-lg text-white">
                  <div className="flex-1 rounded bg-mediumblue flex flex-row items-start justify-end py-0 pr-[22.6px] pl-[23px] whitespace-nowrap z-[1]">
                    <div className="w-[101.7px] relative leading-[52px] flex items-center shrink-0">
                      Enroll Now
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1112px] flex flex-row items-start justify-start pt-0 px-[3px] pb-[7.9px] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start gap-[67px] max-w-full lg:gap-[67px_33px] mq750:gap-[67px_17px] mq1050:flex-wrap">
              <div className="w-[465px] flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border min-w-[465px] max-w-full mq750:min-w-full mq1050:flex-1">
                <div className="self-stretch flex flex-col items-start justify-start gap-[22px]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[50px] font-semibold z-[1] mq1050:text-15xl mq1050:leading-[40px] mq450:text-6xl mq450:leading-[30px]">
                      LEVEL 2 | Grade 4-6
                    </div>
                    <div className="self-stretch h-[168px] relative text-base leading-[24px] text-darkslateblue flex items-center shrink-0 z-[2]">{`Reading plays a significant role in a child's education by prepping them after school life. It is key for acquiring good study habits and builds the foundation for communication & connection. Studies suggest that students who have read more books and read on a regular basis have better school results.`}</div>
                  </div>
                  <div className="w-[165.3px] rounded bg-mediumblue flex flex-row items-start justify-end py-0 pr-[22.6px] pl-[23px] box-border whitespace-nowrap z-[1] text-lg text-white">
                    <div className="w-[101.7px] relative leading-[52px] flex items-center shrink-0">
                      Enroll Now
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="h-[469px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[373px] z-[1] mq750:min-w-full"
                loading="lazy"
                alt=""
                src="/figure--9e3f8925ed994bd3a08bf06795d1a357-landinghomepageimg2png@3x.png"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[99px] max-w-full lg:gap-[99px_49px] mq750:gap-[99px_25px] mq1050:flex-wrap">
            <img
              className="h-[509px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[369px] z-[1] mq750:min-w-full"
              loading="lazy"
              alt=""
              src="/figure--3aa72c34b3b443109928e92d5ac0350a-landinghomepageimg3png@3x.png"
            />
            <div className="w-[465px] flex flex-col items-start justify-start pt-[35px] px-0 pb-0 box-border min-w-[465px] max-w-full mq750:min-w-full mq1050:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start gap-[21px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[1px]">
                  <div className="self-stretch relative leading-[50px] font-semibold z-[1] mq1050:text-15xl mq1050:leading-[40px] mq450:text-6xl mq450:leading-[30px]">
                    LEVEL 3 | Grade 7-9
                  </div>
                  <div className="self-stretch h-[168px] relative text-base leading-[24px] text-darkslateblue flex items-center shrink-0 z-[1]">{`Reading plays a significant role in a child's education by prepping them after school life. It is key for acquiring good study habits and builds the foundation for communication & connection. Studies suggest that students who have read more books and read on a regular basis have better school results.`}</div>
                </div>
                <div className="w-[165.3px] rounded bg-mediumblue flex flex-row items-start justify-end py-0 pr-[22.6px] pl-[23px] box-border whitespace-nowrap z-[1] text-lg text-white">
                  <div className="w-[101.7px] relative leading-[52px] flex items-center shrink-0">
                    Enroll Now
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[73.8px] pr-[21px] pl-6 box-border max-w-full text-center text-23xl text-gray-800 font-mulish lg:pb-[31px] lg:box-border mq750:pb-5 mq750:box-border">
        <div className="flex-1 flex flex-col items-end justify-start gap-[39px] max-w-full mq750:gap-[19px_39px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="w-[919px] flex flex-col items-start justify-start gap-[18px] max-w-full">
              <div className="self-stretch h-[71px] relative leading-[50px] font-semibold flex items-center justify-center shrink-0 z-[1] mq1050:text-15xl mq1050:leading-[40px] mq450:text-6xl mq450:leading-[30px]">
                A sneak peak into some fiction express Titles
              </div>
              <div className="w-[820px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                <div className="h-[9px] w-10 relative box-border z-[1] border-t-[2px] border-solid border-darkslategray" />
              </div>
            </div>
          </div>
          <FrameComponent
            heading2MostPopularFeatur="Level 1"
            level1coverpng2x2="/level1coverpng2x-2@2x.png"
            level1coverpng2x21="/level1coverpng2x-2-1@2x.png"
            level1coverpng2x22="/level1coverpng2x-2-2@2x.png"
          />
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2.5 box-border gap-[25px] max-w-full">
            <div className="w-[190px] relative leading-[50px] font-semibold flex items-center justify-center z-[1] mq1050:text-15xl mq1050:leading-[40px] mq450:text-6xl mq450:leading-[30px]">
              Level 2
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[5px] box-border max-w-full">
              <div className="flex-1 grid flex-row items-start justify-start max-w-full grid-cols-[repeat(3,_minmax(304px,_1fr))] mq750:grid-cols-[minmax(304px,_1fr)] mq1050:[grid-row-gap:20px] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(304px,_526px))]">
                <div className="h-[534px] relative rounded-lg bg-white box-border overflow-hidden max-w-full z-[1] border-[1px] border-solid border-ghostwhite">
                  <img
                    className="absolute top-[14px] left-[16px] w-[374px] h-[490px] object-cover"
                    alt=""
                    src="/level1coverpng2x-2-3@2x.png"
                  />
                </div>
                <div className="h-[534px] relative rounded-lg bg-white box-border overflow-hidden max-w-full z-[2] border-[1px] border-solid border-ghostwhite">
                  <img
                    className="absolute top-[14px] left-[16px] w-[374px] h-[490px] object-cover"
                    alt=""
                    src="/level1coverpng2x-2-4@2x.png"
                  />
                </div>
                <div className="h-[534px] relative rounded-lg bg-white box-border overflow-hidden max-w-full z-[3] border-[1px] border-solid border-ghostwhite">
                  <img
                    className="absolute top-[14px] left-[16px] w-[374px] h-[490px] object-cover"
                    alt=""
                    src="/level1coverpng2x-2-5@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <FrameComponent
            heading2MostPopularFeatur="Level 3"
            level1coverpng2x2="/level1coverpng2x-2-6@2x.png"
            level1coverpng2x21="/level1coverpng2x-2-7@2x.png"
            level1coverpng2x22="/level1coverpng2x-2-8@2x.png"
          />
        </div>
      </section>
      <section className="self-stretch bg-turquoise flex flex-col items-center justify-start pt-[75.5px] px-5 pb-[75.8px] box-border gap-[24.5px] max-w-full z-[1] text-center text-23xl text-gray-400 font-mulish">
        <div className="w-[1272px] h-[327.8px] relative bg-turquoise hidden max-w-full" />
        <div className="w-px h-48 relative hidden" />
        <div className="w-[675.1px] relative leading-[50px] font-semibold flex items-center justify-center max-w-full z-[2] mq1050:text-15xl mq1050:leading-[40px] mq450:text-6xl mq450:leading-[30px]">
          Start using reading club by enrolling today
        </div>
        <div className="w-[678.8px] flex flex-row items-start justify-center py-0 pr-1 pl-0 box-border max-w-full text-lg text-white">
          <div className="w-[160.3px] rounded bg-mediumblue flex flex-row items-end justify-start pt-0 px-8 pb-[0.5px] box-border whitespace-nowrap z-[2]">
            <div className="flex-1 relative leading-[52px] inline-block min-w-[96.6px] shrink-0">
              Get Started
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}

      {/* <footer className="self-stretch bg-gray-100 flex flex-row flex-wrap items-end justify-between py-3 pr-[66.4px] pl-[103px] box-border relative min-h-[135px] max-w-full gap-[20px] text-left text-base text-darkslateblue font-mulish mq450:pl-5 mq450:box-border mq725:pl-[51px] mq725:pr-[33px] mq725:box-border mq975:justify-center">
      <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
        <div className="flex flex-row items-start justify-start gap-[13.4px]">
          <div className="relative leading-[24px] inline-block min-w-[78.6px]">
            Language:
          </div>
          <b className="relative leading-[24px] inline-block min-w-[55.5px]">
            English
          </b>
        </div>
      </div>
      <div className="w-[420.6px] relative leading-[24px] flex items-center shrink-0 max-w-full">
        <span className="w-full">
          <span>{`© 2024 Eupheus. `}</span>
          <span className="[text-decoration:underline] text-slategray">
            Terms
          </span>
          <span>{` | `}</span>
          <span className="[text-decoration:underline] text-slategray">
            Privacy Policy
          </span>
          <span>{` | `}</span>
          <span className="[text-decoration:underline] text-slategray">
            Accessibility
          </span>
        </span>
      </div>
      <img
        className="h-2 w-2 absolute !m-[0] bottom-[-150px] left-[242.3px] overflow-hidden shrink-0"
        alt=""
        src="/languagepopup--svg.svg"
      />
    </footer> */}
      <div>
        <div className="flex  items-start justify-evenly pt-1.5 px-0 pb-0">
          <div className="flex flex-row items-start  gap-[13.4px]">
            <div className=" leading-[24px] inline-block min-w-[78.6px]">
              Language:
            </div>
            <b className=" leading-[24px] inline-block min-w-[55.5px]">
              English
            </b>
          </div>
          <span className="w-full">
            <span>{`© 2024 Eupheus. `}</span>
            <span className="[text-decoration:underline] text-slategray">
              Terms
            </span>
            <span>{` | `}</span>
            <span className="[text-decoration:underline] text-slategray">
              Privacy Policy
            </span>
            <span>{` | `}</span>
            <span className="[text-decoration:underline] text-slategray">
              Accessibility
            </span>
          </span>
        </div>
      </div>
      {/* <div className="w-[420.6px] relative leading-[24px] flex items-center shrink-0 max-w-full">
        <span className="w-full">
          <span>{`© 2024 Eupheus. `}</span>
          <span className="[text-decoration:underline] text-slategray">
            Terms
          </span>
          <span>{` | `}</span>
          <span className="[text-decoration:underline] text-slategray">
            Privacy Policy
          </span>
          <span>{` | `}</span>
          <span className="[text-decoration:underline] text-slategray">
            Accessibility
          </span>
        </span>
      </div> */}
    </div>
  );
};

export default Home;
