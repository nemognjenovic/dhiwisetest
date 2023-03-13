import React from "react";

import { Text, Img, Button } from "components";
import { useNavigate } from "react-router-dom";

const OnboardingDesktopFivePage = () => {
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
              Enable desktop notifications
            </Text>
            <Text
              className="font-normal leading-[21.00px] md:max-w-[100%] max-w-[570px] not-italic text-center text-gray_400"
              as="h3"
              variant="h3"
            >
              Never miss and oppurtunity again - let’s enable desktop
              notifiacations in your browser settings
            </Text>
          </div>
          <div className="bg-bluegray_900 border-[1px] border-deep_purple_A200 border-solid flex flex-col md:gap-[40px] gap-[72px] items-center justify-start mt-[85px] sm:px-[20px] md:px-[40px] px-[64px] py-[48px] rounded-[6px] shadow-bs w-[296px]">
            <Img
              src="images/img_lock.svg"
              className="h-[64px] w-[64px]"
              alt="lock"
            />
            <Button className="bg-deep_purple_A200 cursor-pointer font-medium leading-[normal] min-w-[85px] sm:px-[20px] px-[22px] py-[10px] rounded-[5px] text-[14px] text-center text-white_A700 tracking-[0.40px] w-[auto]">
              Allow
            </Button>
          </div>
          <div className="flex flex-col gap-[32px] items-center justify-start mb-[9px] mt-[97px] sm:w-[100%] w-[570px]">
            <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
              <div className="flex items-center justify-center sm:px-[20px] px-[22px] py-[10px] self-stretch w-[auto]">
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
                <Button className="bg-deep_purple_A200 cursor-pointer font-medium leading-[normal] min-w-[79px] sm:px-[20px] px-[22px] py-[10px] rounded-[5px] text-[14px] text-center text-white_A700 tracking-[0.40px] w-[auto]">
                  Next
                </Button>
              </div>
            </div>
            <div className="bg-deep_purple_A200_1e flex items-center justify-start rounded-[6px] w-[100%]">
              <div className="bg-deep_purple_A200 h-[12px] rounded-[6px] w-[100%]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnboardingDesktopFivePage;
