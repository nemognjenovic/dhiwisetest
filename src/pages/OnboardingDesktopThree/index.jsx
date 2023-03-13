import React from "react";

import { Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const OnboardingDesktopThreePage = () => {
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
              Widget - what you get and how to start
            </Text>
            <Text
              className="font-normal not-italic text-center text-gray_400 w-[auto]"
              as="h3"
              variant="h3"
            >
              It’s easier than you can imagine!
            </Text>
          </div>
          <div className="flex flex-col gap-[24px] items-start justify-start mt-[122px] sm:w-[100%] w-[570px]">
            <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
              <Text
                className="font-bold text-gray_400 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                Widget - everything you need to know
              </Text>
              <Text
                className="font-normal leading-[21.00px] md:max-w-[100%] max-w-[570px] not-italic text-gray_400 text-left"
                as="h3"
                variant="h3"
              >
                <span className="text-gray_400 text-[14px] font-montserrat">
                  In 60 seconds you can have Proadvisor Chat installed on your
                  website!Once you add it, you can start video chatting, text
                  messaging, schedule meetings and recive money from
                  customers!Simply click the “Copy Script” button below and
                  paste it into your website’s HTML. For further explanations,
                  please go to{" "}
                </span>
                <a
                  href="javascript:"
                  className="text-deep_purple_A200 text-[14px] font-montserrat underline"
                >
                  THIS link
                </a>
                <a
                  href="javascript:"
                  className="text-gray_400 text-[14px] font-montserrat underline"
                >
                  {" "}
                </a>
                <span className="text-gray_400 text-[14px] font-montserrat">
                  or watch the video below.
                </span>
              </Text>
            </div>
            <div className="flex flex-row gap-[24px] items-center justify-start w-[100%]">
              <Button className="bg-cyan_500 cursor-pointer font-medium leading-[normal] min-w-[130px] sm:px-[20px] px-[22px] py-[10px] rounded-[5px] text-[14px] text-center text-white_A700 tracking-[0.40px] w-[auto]">
                Copy Script
              </Button>
              <Button className="cursor-pointer font-medium leading-[normal] min-w-[139px] outline outline-[0.5px] outline-cyan_500 sm:px-[20px] px-[22px] py-[10px] rounded-[5px] text-[14px] text-center text-cyan_500 tracking-[0.40px] w-[auto]">
                Watch Video
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-[32px] items-center justify-start mb-[9px] mt-[113px] sm:w-[100%] w-[570px]">
            <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
              <div
                className="common-pointer flex items-center justify-center sm:px-[20px] px-[22px] py-[10px] self-stretch w-[auto]"
                onClick={() => navigate("/onboardingdesktopfour")}
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
                  onClick={() => navigate("/onboardingdesktopfour")}
                >
                  Next
                </Button>
              </div>
            </div>
            <div className="h-[12px] overflow-hidden relative w-[100%]">
              <div className="w-full h-full absolute bg-deep_purple_A200_1e rounded-[6px]"></div>
              <div
                className="h-full absolute bg-deep_purple_A200  rounded-[6px]"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnboardingDesktopThreePage;
