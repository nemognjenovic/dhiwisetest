import React from "react";

import { Text, Img, Button } from "components";
import Progressbar from "components/Progressbar";
import { useNavigate } from "react-router-dom";

const OnboardingDesktopTwoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_900 flex font-montserrat items-center justify-start mx-[auto] p-[152px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="bg-bluegray_900 flex flex-col items-center justify-start mx-[auto] p-[39px] md:px-[20px] rounded-[6px] shadow-bs md:w-[100%] w-[65%]">
          <div className="flex flex-col gap-[16px] items-center justify-start mt-[9px] sm:w-[100%] w-[570px]">
            <Text
              className="md:max-w-[100%] max-w-[570px] text-bluegray_100 text-center"
              as="h1"
              variant="h1"
            >
              Let’s get started with your Widget and ClicknTalk Page
            </Text>
            <Text
              className="font-normal leading-[21.00px] md:max-w-[100%] max-w-[570px] not-italic text-center text-gray_400"
              as="h3"
              variant="h3"
            >
              Click on one of the boxes below to begin the setup process.. Use
              both for an optimized remote experience.
            </Text>
          </div>
          <div className="flex flex-col gap-[16px] items-center justify-start mt-[58px] mx-[auto] self-stretch sm:w-[100%] w-[auto]">
            <div className="bg-deep_purple_A200_1e border-[1px] border-deep_purple_A200 border-solid flex sm:flex-col flex-row gap-[29px] items-center justify-start pl-[36px] pr-[40px] sm:px-[20px] py-[20px] rounded-[6px] sm:w-[100%] w-[570px]">
              <Img
                src="images/img_trash.svg"
                className="h-[42px] w-[42px]"
                alt="trash"
              />
              <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                <Text
                  className="text-deep_purple_A200 text-left w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Widget
                </Text>
                <Text
                  className="font-normal leading-[21.00px] md:max-w-[100%] max-w-[423px] not-italic text-deep_purple_A200 text-left"
                  as="h3"
                  variant="h3"
                >
                  This widhet will turn your website into a fully-featured
                  virtual office
                </Text>
              </div>
            </div>
            <div className="bg-bluegray_200_1e border-[1px] border-gray_601 border-solid h-[120px] sm:h-[151px] pl-[36px] pr-[40px] sm:px-[20px] py-[20px] relative rounded-[6px] sm:w-[100%] w-[570px]">
              <div className="flex sm:flex-col flex-row gap-[29px] h-[100%] items-center justify-start m-[auto] w-[87%]">
                <Img
                  src="images/img_computer.svg"
                  className="h-[42px] w-[42px]"
                  alt="computer"
                />
                <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                  <Text
                    className="text-bluegray_100 text-left w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    ClickNTalk Page
                  </Text>
                  <Text
                    className="font-normal leading-[21.00px] md:max-w-[100%] max-w-[423px] not-italic text-gray_400 text-left"
                    as="h3"
                    variant="h3"
                  >
                    ClickNTalk page is great way to kickoff remote interactions
                    if you d not have a website.
                  </Text>
                </div>
              </div>
              <div className="absolute bg-gray_600_a3 border-[1px] border-gray_601 border-solid h-[120px] inset-[0] justify-center m-[auto] rounded-[6px] w-[100%]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-[32px] items-center justify-start mb-[9px] mt-[103px] sm:w-[100%] w-[570px]">
            <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
              <div
                className="common-pointer flex items-center justify-center sm:px-[20px] px-[22px] py-[10px] self-stretch w-[auto]"
                onClick={() => navigate("/onboardingdesktopthree")}
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
                  onClick={() => navigate("/onboardingdesktopthree")}
                >
                  Next
                </Button>
              </div>
            </div>
            <Progressbar className="h-[12px] overflow-hidden relative w-[100%]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OnboardingDesktopTwoPage;
