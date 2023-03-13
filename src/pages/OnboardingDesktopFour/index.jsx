import React from "react";

import { Text, Img, Button } from "components";
import { useNavigate } from "react-router-dom";

const OnboardingDesktopFourPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_900 flex font-montserrat items-center justify-start mx-[auto] p-[152px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="bg-bluegray_900 flex flex-col items-center justify-start mx-[auto] p-[39px] md:px-[20px] rounded-[6px] shadow-bs md:w-[100%] w-[58%]">
          <div className="flex flex-col gap-[16px] items-center justify-start mt-[9px] sm:w-[100%] w-[570px]">
            <Text
              className="text-bluegray_100 text-center w-[auto]"
              as="h1"
              variant="h1"
            >
              Enable microphone+camera
            </Text>
            <Text
              className="font-normal not-italic text-center text-gray_400 w-[auto]"
              as="h3"
              variant="h3"
            >
              Enable mics and cams in your browser to start video chatting
            </Text>
          </div>
          <div className="bg-bluegray_900 border-[1px] border-deep_purple_A200 border-solid flex flex-col md:gap-[40px] gap-[72px] items-center justify-start mt-[106px] sm:px-[20px] md:px-[40px] px-[64px] py-[48px] rounded-[6px] shadow-bs w-[296px]">
            <Img
              src="images/img_frame9.svg"
              className="h-[64px] w-[168px]"
              alt="frameNine"
            />
            <Button className="bg-deep_purple_A200 cursor-pointer font-medium leading-[normal] min-w-[85px] sm:px-[20px] px-[22px] py-[10px] rounded-[5px] text-[14px] text-center text-white_A700 tracking-[0.40px] w-[auto]">
              Allow
            </Button>
          </div>
          <div className="flex flex-col gap-[32px] items-center justify-start mb-[9px] mt-[97px] sm:w-[100%] w-[570px]">
            <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
              <div
                className="common-pointer flex items-center justify-center sm:px-[20px] px-[22px] py-[10px] self-stretch w-[auto]"
                onClick={() => navigate("/onboardingdesktopfive")}
              >
                <Text
                  className="font-medium text-bluegray_400 text-center tracking-[0.40px] w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Skip
                </Text>
              </div>
              <div className="flex flex-row gap-[8px] items-start justify-start self-stretch w-[auto]">
                <Button
                  className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[81px] outline outline-[0.5px] outline-bluegray_400 sm:px-[20px] px-[22px] py-[10px] rounded-[5px] text-[14px] text-bluegray_400 text-center tracking-[0.40px] w-[auto]"
                  onClick={() => navigate(-1)}
                >
                  Back
                </Button>
                <Button
                  className="common-pointer bg-deep_purple_A200 cursor-pointer font-medium leading-[normal] min-w-[79px] sm:px-[20px] px-[22px] py-[10px] rounded-[5px] text-[14px] text-center text-white_A700 tracking-[0.40px] w-[auto]"
                  onClick={() => navigate("/onboardingdesktopfive")}
                >
                  Next
                </Button>
              </div>
            </div>
            <div className="h-[12px] overflow-hidden relative w-[100%]">
              <div className="w-full h-full absolute bg-deep_purple_A200_1e rounded-[6px]"></div>
              <div
                className="h-full absolute bg-deep_purple_A200  rounded-[6px]"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnboardingDesktopFourPage;
